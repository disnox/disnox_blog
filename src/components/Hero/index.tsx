import React from 'react';

import {useTrail, animated} from 'react-spring';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

import HeroMain from './img/hero_main.svg';

import GithubIcon from '@site/static/icons/github.svg';
import JuejinIcon from '@site/static/icons/juejin.svg';
import RssIcon from '@site/static/icons/rss.svg';
import ZhihuIcon from '@site/static/icons/zhihu.svg';
import BilibiliIcon from '@site/static/icons/bilibili.svg';
import QqIcon from '@site/static/icons/qq.svg';
import WxIcon from '@site/static/icons/wx.svg';
import CsdnIcon from '@site/static/icons/csdn.svg';
import CloudMusicIcon from '@site/static/icons/cloud-music.svg';
import TwitterIcon from '@site/static/icons/twitter.svg';
import Button from '../Button';

import styles from './styles.module.css';

function Hero() {
  const {
    i18n: {currentLocale},
  } = useDocusaurusContext();

  // animation
  const animatedTexts = useTrail(5, {
    from: {opacity: 0, transform: 'translateY(3em)'},
    to: {opacity: 1, transform: 'translateY(0)'},
    config: {
      mass: 3,
      friction: 45,
      tension: 460,
    },
  });

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={animatedTexts[0]} className={styles.hero_text}>
          <Translate id="homepage.hero.greet">👋你好! 我是</Translate>
          <span className={styles.intro__name}>
            <Translate id="homepage.hero.name">尚宇</Translate>
          </span>
        </animated.div>
        <animated.p style={animatedTexts[1]}>
          <Translate id="homepage.hero.text">
            {`我在这里记录一些知识，以免遗忘，也希望我的个人经历对你有所启发，请随意浏览～`}
          </Translate>
          <br />
          <Translate
            id="homepage.hero.need"
            values={{
              note: (
                <Link to="/docs/skill">
                  <Translate id="hompage.hero.text.note">技术笔记</Translate>
                </Link>
              ),
              project: (
                <Link to="/project">
                  <Translate id="hompage.hero.text.project">实战项目</Translate>
                </Link>
              ),
              link: (
                <Link to="/website">
                  <Translate id="hompage.hero.text.link">网址导航</Translate>
                </Link>
              ),
            }}>
            {`这里有{note}、{project}、{link}。`}
          </Translate>
        </animated.p>
        <SocialLinks animatedProps={animatedTexts[4]} />
        {
          <animated.div style={animatedTexts[2]}>
            <Button isLink href={'./about'}>
              <Translate id="hompage.hero.text.introduce">自我介绍</Translate>
            </Button>
          </animated.div>
        }
      </div>
      <HeroMainImage />
    </animated.div>
  );
}

export function SocialLinks({animatedProps, ...props}) {
  const {siteConfig} = useDocusaurusContext();
  const {themeConfig} = siteConfig;
  const socials = themeConfig.socials as {
    github: string;
    blibli: string;
    zhihu: string;
    csdn: string;
    qq: string;
    wx: string;
    cloudmusic: string;
  };

  return (
    <animated.div className={styles.social__links} style={animatedProps}>
      <a href="https://space.bilibili.com/511798206?spm_id_from=333.1007.0.0" target="_blank">
        <BilibiliIcon />
      </a>
      <a href="https://github.com/NOX369" target="_blank">
        <GithubIcon />
      </a>
      <a href="https://www.zhihu.com/people/chui-zi-26-38" target="_blank">
        <ZhihuIcon />
      </a>
      <a href="https://blog.csdn.net/m0_47339333?spm=1000.2115.3001.5343" target="_blank">
        <CsdnIcon />
      </a>
      <a href="https://www.helloimg.com/image/ZV1U6u" target="_blank">
        <QqIcon />
      </a>
      <a href="https://www.helloimg.com/image/ZV1kZv" target="_blank">
        <WxIcon />
      </a>
      <a href="https://music.163.com/#/user/home?id=3906202648" target="_blank">
        <CloudMusicIcon />
      </a>
    </animated.div>
  );
}

function HeroMainImage() {
  return (
    <div className={styles.bloghome__image}>
      <HeroMain />
    </div>
  );
}

export default Hero;
