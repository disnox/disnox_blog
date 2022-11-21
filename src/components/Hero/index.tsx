import React from 'react';

import { useTrail, animated } from '@react-spring/web';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

import HeroMain from './img/hero_main.svg';

import JuejinIcon from '@site/static/icons/juejin.svg';
import { Icon } from '@iconify/react';

import styles from './styles.module.scss';

function Hero() {
  const trails = useTrail(4, {
    from: { opacity: 0, transform: 'translate3d(0px, 2em, 0px)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    config: {
      mass: 3,
      tension: 460,
      friction: 45,
    },
  });

  return (
    <animated.div className={styles.hero}>
      <div className={styles.bloghome__intro}>
        <animated.div style={trails[0]} className={styles.hero_text}>
          <Translate id="homepage.hero.greet">你好! 我是</Translate>
          <span className={styles.intro__name}>
            <Translate id="homepage.hero.name">📺尚宇</Translate>
          </span>
        </animated.div>
        <animated.p style={trails[1]}>
          <Translate id="homepage.hero.text">
            {`在这里你能了解到各类实战开发的所遇到的问题，帮助你在学习的过程了解最新的技术栈，并希望我的个人经历对你有所启发。`}
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
            }}
          >
            {`或许你需要{note}、{project}、{link}。`}
          </Translate>
        </animated.p>
        <SocialLinks style={trails[2]} />
        <animated.div style={trails[3]}>
          <a className={styles.intro} href={'./about'}>
            <Translate id="hompage.hero.text.introduce">自我介绍</Translate>
            <Icon icon='ri:arrow-right-line' />
          </a>
        </animated.div>
      </div>
      <div className={styles.bloghome__image}>
        <HeroMain />
      </div>
    </animated.div>
  );
}

export function SocialLinks({ ...prop }) {
  const { siteConfig } = useDocusaurusContext();
  const { themeConfig } = siteConfig;
  const socials = themeConfig.socials as {
    github: string;
    twitter: string;
    juejin: string;
    csdn: string;
    qq: string;
    wx: string;
    cloudmusic: string;
    zhihu: string;
  };

  return (
    <animated.div className={styles.social__links} {...prop}>
      <a href="/rss.xml" target="_blank">
        <Icon icon='ri:rss-line' />
      </a>
      <a href={socials.github} target="_blank">
        <Icon icon='ri:github-line' />
      </a>
      <a href={socials.juejin} target="_blank">
        <JuejinIcon />
      </a>
      <a href={socials.qq} target="_blank">
        <Icon icon='ri:qq-line' />
      </a>
      <a href={socials.twitter} target="_blank">
        <Icon icon='ri:twitter-line' />
      </a>
      <a href={socials.zhihu} target="_blank">
        <Icon icon='ri:zhihu-line' />
      </a>
    </animated.div>
  );
}

export default Hero;
