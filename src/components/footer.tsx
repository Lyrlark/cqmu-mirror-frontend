import { Box, Grid, Link, Typography } from '@mui/material';
import { Trans } from 'gatsby-plugin-react-i18next';
import React from 'react';
import CQMUcnw from '../../resource/icons/CQMUcnw.svg';
import PSNW from '../../resource/icons/PSNW.svg';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import BlogIcon from '@mui/icons-material/Description';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default () => {
  return (
    <Box sx={{ px: { xs: 4, sm: 8 }, py: 6 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        rowSpacing={2}
      >
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            columns={2}
            rowSpacing={2}
            columnSpacing={8}
          >
            <Grid item xs={2} md={1}>
              <Trans>关于重庆医科大学开源镜像站</Trans>
              <Box maxWidth={520}>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <Trans>
                    重庆医科大学开源软件镜像站是一个致力于助力开发者开发，方便重医校内外师生高效访问开源资源的非盈利计划。
                  </Trans>
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <Trans>
                    本站由医学信息学院办公室、校信息中心支持创办。由项导工作室开发运行维护，感谢团队成员rand777、Alien_Chen、DkWms为本站建设作出的贡献。
                  </Trans>
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <Trans>
                    本站基于浙江大学ZJUSCT开源的mirror-front与清华大学TUNA开源的tunasync项目，感谢ZJUSCT与TUNA为国内开源生态作出的伟大贡献
                    除特殊注明外，本站源码在 Apache License 2.0
                    许可下发布，本站创作内容均在 CC BY-NC-SA 4.0
                    许可下发布，相关源码及创作内容可在 GitHub 获取。
                  </Trans>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <Trans>
                    根据相关法律法规，本站部分内容对校外公网访问用户提供服务时会进行网络审查，请勿使用IDM等多线程下载器或代理等。
                  </Trans>
                </Typography>
                <Typography gutterBottom variant="body2" color="text.secondary">
                  <Link
                    href="https://github.com/PGuideStudio/cqmu-mirror-frontend/issues"
                    color="text.secondary"
                    underline="hover"
                  >
                    <br />

                    <Trans>
                      问题反馈与镜像请求（GitHub）
                      <OpenInNewIcon sx={{ mr: -1 }} />
                    </Trans>
                  </Link>
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} md={1}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                columnSpacing={8}
              >
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="body1"
                    color="text.secondary"
                    fontWeight={700}
                  >
                    <Trans>关于项导工作室</Trans>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="mailto:contact@pguide.studio"
                      color="text.secondary"
                      underline="hover"
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <EmailIcon sx={{ mr: 1 }} />
                      <Trans>Email</Trans>
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="https://github.com/PGuideStudio"
                      color="text.secondary"
                      underline="hover"
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <GitHubIcon sx={{ mr: 1 }} />
                      <Trans>GitHub</Trans>
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="https://blog.pguide.studio"
                      color="text.secondary"
                      underline="hover"
                      sx={{ display: 'flex', alignItems: 'center' }}
                    >
                      <BlogIcon sx={{ mr: 1 }} />
                      <Trans>Blog</Trans>
                    </Link>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="body1"
                    color="text.secondary"
                    fontWeight={700}
                  >
                    <Trans>特别鸣谢</Trans>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="https://cnw.cqmu.edu.cn"
                      color="text.secondary"
                      underline="hover"
                    >
                      <Trans>重庆医科大学信息中心</Trans>
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="https://mi.cqmu.edu.cn"
                      color="text.secondary"
                      underline="hover"
                    >
                      <Trans>医学信息学院学生工作办公室</Trans>
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="https://www.zjusct.io/"
                      underline="hover"
                      color="text.secondary"
                    >
                      <Trans>浙江大学超算团队ZJUSCT</Trans>
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="https://tuna.moe"
                      color="text.secondary"
                      underline="hover"
                    >
                      <Trans>清华大学 TUNA 协会</Trans>
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="https://sls.westlake.edu.cn/"
                      color="text.secondary"
                      underline="hover"
                    >
                      <Trans>西湖大学超算集群</Trans>
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="body2">
                    <Link
                      href="https://mirrorz.org/"
                      color="text.secondary"
                      underline="hover"
                    >
                      <Trans>中国教育网 MirrorZ 镜像站项目</Trans>
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            columnSpacing={4}
            rowSpacing={2}
            alignItems="center"
          >
            <Grid item>
              <Link href="https://mi.cqmu.edu.cn/">
                <CQMUcnw width="16rem" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.pguide.studio">
                <PSNW width="16rem" />
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
