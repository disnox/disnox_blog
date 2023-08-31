import React from 'react'
import clsx from 'clsx'
import Translate, { translate } from '@docusaurus/Translate'

import styles from './styles.module.scss'

import WebDeveloperSvg from '@site/static/svg/1.svg'
import OpenSourceSvg from '@site/static/svg/2.svg'
import SpiderSvg from '@site/static/svg/3.svg'
import SectionTitle from '../SectionTitle'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: '嵌入式软硬兼施攻城狮',
    }),
    Svg: WebDeveloperSvg,
    description: (
      <>
        深度融合软硬件知识，致力于创造高效嵌入式系统的工程师，希望自己能够拥有更加丰富的跨领域知识和实践经验。
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '机器人爱好者',
    }),
    Svg: SpiderSvg,
    description: (
      <>
        热衷于机器人与电子技术，追求创新设计与制作，致力于将电子元件赋予生命，希望能创造出更加智能化和有趣的机器人系统。
      </>
    ),
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '开源爱好者',
    }),
    Svg: OpenSourceSvg,
    description: (
      <>
        作为一名开源爱好者，积极参与开源社区，为开源项目贡献代码，希望有生之年能够构建出一个知名的开源项目。
      </>
    ),
  },
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col', styles.feature)}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--left padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section
      className={clsx(styles.featureContainer, 'container padding-vert--sm')}
    >
      <SectionTitle icon={'ri:map-pin-user-line'}>
        <Translate id="homepage.feature.title">个人特点</Translate>
      </SectionTitle>
      <div className={clsx('row', styles.features)}>
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}
