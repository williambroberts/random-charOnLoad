import EmailButton from '@/components/buttons/emailButton'
import ExternalButton from '@/components/buttons/externalButton'
import PageReloadButton from '@/components/buttons/pageReloadButton'
import Footer from '@/components/footer/footer'
import IconGithub from '@/components/icons/social/github'
import RandomChar from '@/components/randomChar/randomCHar'
import Intro from '@/components/setup/intro'
import FillerHalf from '@/components/setup/layout/fillerHalf'
import FlexRow from '@/components/setup/layout/flexRow'
import PageWrapper from '@/components/setup/pageWrapper'
import OneRem from '@/components/setup/position/onerem'
import Title from '@/components/setup/title'
import Image from 'next/image'


export default function Home() {
  return (
   <>
   
   <main>
    <PageWrapper>
      <Title name={"React Scramble Reveal"} />
      
      <Intro>
      <p>A react word <strong>scrambler</strong> for onLoad animations for websites. It takes in 3 variables, the <strong>text</strong>, <strong>font-size</strong> and the <strong>animation speed</strong>. It produces a <strong>random</strong> animation each run.</p>
      </Intro>
      <OneRem/>
       <RandomChar word={"product"} speed={50} fontSize={20}/>

       <OneRem/>
      <FlexRow>
        <ExternalButton name={"Github Code"} link={"https://github.com/williambroberts/random-charOnLoad.git"} icon={<IconGithub/>}/>
      
        
        <FillerHalf/>
        <PageReloadButton/>
      </FlexRow>
    </PageWrapper>
   
   </main>
   <Footer/>
   </>
  )
}
