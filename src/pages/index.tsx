import { Box, Chip, ChipProps, Grid, Link, Typography } from '@mui/material';
import { graphql } from 'gatsby';
import { Trans, useI18next } from 'gatsby-plugin-react-i18next';
import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import FrequentlyUsedMirrorCard from '../components/frequently-used-mirror-card';
import LanguageIconButton from '../components/language-icon-button';
import SearchTable from '../components/search-table';
import NavBar from '../components/nav-bar';
import Seo from '../components/seo';
import ThemeIconButton from '../components/theme-icon-button';
import { Locale, Mirror, MirrorDto } from '~/types/mirror';
import frequentlyUsedMirror from '../utils/frequently-used-mirror-list';
import { getUrl } from '~/utils/url';
import { readCache, writeCache } from '~/utils/cache';
import NameIconButton from '../components/name-icon-button';
import Icon from '../../resource/icons/favicon.svg';

interface Data {
  mirrorDocs: {
    nodes: {
      slug: string;
      locale: string;
      frontmatter?: {
        mirrorId?: string;
      };
    }[];
  };
  news: {
    nodes: {
      slug: string;
      locale: string;
      frontmatter: {
        name: string;
        title: string;
        date: string;
        author: string;
      };
    }[];
  };
}

const networkMap: {
  [value: number]: {
    text: string;
    color: ChipProps['color'];
  };
} = {
  0: {
    text: 'CERNET',
    color: 'success',
  },
  1: {
    text: '校内网络 - IPv4',
    color: 'success',
  },
  2: {
    text: '校内网络 - IPv6',
    color: 'success',
  },
};

async function fetchMirrors(): Promise<MirrorDto[]> {
  const res = await fetch('/api/mirrors');
  if (!res.ok) {
    throw new Error(`API call failed: ${res.status} ${await res.text()}`);
  }
  const json = await res.json();
  writeCache('mirrors', json);
  return json;
}

async function fetchNetworkMode(): Promise<number> {
  const res = await fetch('/api/is_campus_network');
  if (!res.ok) {
    return 0;
  }
  const json = await res.json();
  const c = Number.isInteger(json) ? json : 0;
  writeCache('networkMode', c);
  return c;
}

const Index = ({ data }: { data: Data }) => {
  const { language, t } = useI18next();

  const [networkMode, setNetworkMode] = useState<number>(
    readCache('networkMode', 0)
  );
  const [mirrorsRaw, setMirrorsRaw] = useState<MirrorDto[]>(
    readCache('mirrors', [])
  );

  useEffect(() => {
    fetchMirrors()
      .then(d => setMirrorsRaw(d))
      .catch(err => console.error(err));
    fetchNetworkMode()
      .then(d => setNetworkMode(d))
      .catch(err => console.error(err));
  }, []);

  const mirrorDocUrls = React.useMemo<Record<string, string>>(
    () =>
      Object.fromEntries(
        data.mirrorDocs.nodes
          .filter(d => d.frontmatter?.mirrorId && d.locale === language)
          .map(d => [d.frontmatter!.mirrorId, d.slug])
      ),
    [data, language]
  );

  const mirrors = React.useMemo<{ [key in string]: Mirror }>(
    () =>
      Object.fromEntries(
        mirrorsRaw.map(dto => [
          dto.id,
          {
            ...dto,
            docUrl: mirrorDocUrls[dto.id],
          },
        ])
      ),
    [mirrorsRaw, mirrorDocUrls]
  );
  const newsUrls = React.useMemo<Array<[string, Date, string]>>(
    () =>
      data.news.nodes
        .filter(d => d.locale === language)
        .map(
          d =>
            [d.frontmatter.title, new Date(d.frontmatter.date), d.slug] as [
              string,
              Date,
              string,
            ]
        )
        .sort((a, b) => b[1].getTime() - a[1].getTime()),
    [data, language]
  );

  return (
    <>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          scrollBehavior: 'smooth',
        }}
      >
        <Seo title="CQMU Mirror" />
        <Grid
          container
          spacing={{ xs: 6 }}
          columns={{ xs: 1 }}
          sx={{ px: { xs: 4, sm: 8 }, py: 8 }}
        >
          <Grid item xs={1}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Box
                sx={{
                  minWidth: { xs: 54, sm: 72 },
                  maxWidth: { xs: 54, sm: 72 },
                }}
              >
                <Icon />
              </Box>
              <Box sx={{ width: '90%', ml: 5 }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography
                      variant="h1"
                      component="div"
                      color="primary"
                      sx={{ fontSize: { xs: 48, sm: 64 }, mt: 0 }}
                    >
                      <Trans>CQMU Mirror</Trans>
                    </Typography>
                  </Grid>
                  <Grid item sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <NameIconButton />
                    <LanguageIconButton />
                    <ThemeIconButton />
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    mt: { xs: -1, sm: -2 },
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    component="div"
                    color="primary"
                    sx={{ fontSize: { xs: 21, sm: 28 } }}
                  >
                    <Trans>重庆医科大学开源镜像站</Trans>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="div"
                    color="primary"
                    sx={{ ml: 1 }}
                  >
                    <Chip
                      size="medium"
                      label={t(networkMap[networkMode].text)}
                      color={networkMap[networkMode].color}
                      sx={{ display: { xs: 'none', sm: 'grid' } }}
                    />
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={1}>
            <Typography gutterBottom variant="h5" component="div">
              <Trans>常用镜像</Trans>
            </Typography>
            <Grid
              container
              spacing={{ xs: 2 }}
              columns={{ xs: 1, sm: 3, md: 6 }}
            >
              {frequentlyUsedMirror.map((e, i) => {
                const mirror = mirrors[e.id];
                return (
                  mirror && (
                    <Grid item xs={1} key={i}>
                      <FrequentlyUsedMirrorCard
                        name={mirror.name[language as Locale]}
                        desc={mirror.desc[language as Locale]}
                        icon={e.icon}
                        url={getUrl(
                          mirror.docUrl || mirror.url,
                          !!mirror.docUrl
                        )}
                      />
                    </Grid>
                  )
                );
              })}
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Typography gutterBottom variant="h5" component="div">
              <Trans>近期更新</Trans>
            </Typography>
            <Grid>
              {newsUrls.map(([title, date, url], i) => (
                <Grid container key={i}>
                  <Link href={url} underline="hover">
                    {title}
                  </Link>
                  <Typography color="info.light" component="div">
                    &nbsp; - {date.toLocaleDateString()}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Typography gutterBottom variant="h5" component="div">
              <Trans>所有镜像</Trans>
            </Typography>
            <SearchTable queryResults={Object.values(mirrors)} />
          </Grid>
        </Grid>
        <Footer />
      </Box>
      <NavBar data={Object.values(mirrors)} />
      <p style={{ textAlign: 'center', padding: '1rem' }}>
        版权所有 © 重庆医科大学
        <Link
          paddingLeft="1em"
          underline="hover"
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50009802000810"
          target="_blank"
        >
          渝公网安备50009802000810号
        </Link>
        <Link
          paddingLeft="1em"
          href="https://beian.miit.gov.cn/"
          underline="hover"
          target="_blank"
        >
          渝ICP备12000838号-1
        </Link>
      </p>
    </>
  );
};

export const query = graphql`
  query ($language: String!) {
    mirrorDocs: allDocument(filter: { source: { eq: "mirrors" } }) {
      nodes {
        frontmatter
        slug
        locale
      }
    }
    news: allDocument(filter: { source: { eq: "news" } }) {
      nodes {
        frontmatter
        slug
        locale
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default Index;
