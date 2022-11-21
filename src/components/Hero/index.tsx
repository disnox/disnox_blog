import React from 'react';

import { useTrail, animated } from '@react-spring/web';
import Translate from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';

import HeroMain from './img/hero_main.svg';

import JuejinIcon from '@site/static/icons/juejin.svg';
import GithubIcon from '@site/static/icons/github.svg';
import RssIcon from '@site/static/icons/rss.svg';
import ZhihuIcon from '@site/static/icons/zhihu.svg';
import BilibiliIcon from '@site/static/icons/bilibili.svg';
import QqIcon from '@site/static/icons/qq.svg';
import WxIcon from '@site/static/icons/wx.svg';
import CsdnIcon from '@site/static/icons/csdn.svg';
import CloudMusicIcon from '@site/static/icons/cloud-music.svg';
import TwitterIcon from '@site/static/icons/twitter.svg';
import Button from '../Button';
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
          <Translate id="homepage.hero.greet">Hello👋! 我是</Translate>
          <span className={styles.intro__name}>
            <Translate id="homepage.hero.name">尚宇</Translate>
          </span>
        </animated.div>
        <animated.p style={trails[1]}>

        <Translate id="homepage.hero.text">
            {`我在这里记录一些知识，以免遗忘，也希望对你有用，请随意浏览～`}
        </Translate>
          <br />
          <br />
        <Translate>
          每个优秀的人，都会有一段沉默的时光，那段时光，是付出了很多努力
        </Translate>
          <br />
          <Translate>
          却得不到结果的日子，我们把它叫做扎根。
        </Translate>
          <br /><br />

          <Translate
            id="homepage.hero.need"
            values={{
              note: (
                <Link to="/docs/skill">
                  <Translate id="hompage.hero.text.note">技术笔记</Translate>
                </Link>
              ),
              project: (
                <Link to="/project/">
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
            {`如果你有兴趣，可以看看我的{note}和{project}以及{link}。`}
          </Translate>
        </animated.p>
        <SocialLinks style={trails[2]} />
        <animated.div style={trails[3]}>
          {/* <a className={styles.intro} href={'./about'}>
            <Translate id="hompage.hero.text.introduce">自我介绍</Translate>
            <Icon icon='ri:arrow-right-line' />
          </a>
          <span>　　　　　</span>  
          <a className={styles.intro} href="https://kdocs.cn/l/cp0rLMrgfABF">
            <Translate id="hompage.hero.text.introduce">个人简历</Translate>
            <Icon icon='ri:arrow-right-line' />
          </a> */}
          <br/> 
          <Button isLink href={'./about'}>
            <Translate id="hompage.hero.text.introduce">自我介绍</Translate>
          </Button>
          <span>　</span> 
          <Button isLink href="https://kdocs.cn/l/cp0rLMrgfABF">
            <Translate id="hompage.hero.text.introduce">个人简历</Translate>
          </Button>
          {/* <span>　</span> 
          <Button isLink href="/docs/skill">
            <Translate id="hompage.hero.text.introduce">技术笔记</Translate>
          </Button> */}
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
    blibli: string;
  };

  return (
    <animated.div className={styles.social__links} {...prop}>
      <a href={socials.blibli} target="_blank">
        <BilibiliIcon />
      </a>
      <a href={socials.github} target="_blank">
        <Icon icon='ri:github-line' />
      </a>
      <a href={socials.cloudmusic} target="_blank">
        <CloudMusicIcon />
      </a>
      <a href={socials.qq} target="_blank">
        <Icon icon='ri:qq-line' />
      </a>
      <a href={socials.wx} target="_blank">
      <WxIcon />
      </a>
      <a href={socials.csdn} target="_blank">
        <CsdnIcon />
      </a>
      <a href={socials.zhihu} target="_blank">
        <Icon icon='ri:zhihu-line' />
      </a>
    </animated.div>
  );
}

export default Hero;
