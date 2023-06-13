import Section1 from './components/Section1'
import Format from './layout/Format'
import Section2 from './components/Section2';

// components

export default function Home() {
  return (
    <>
      <Format>
        <Section1 />
        <Section2 />
      </Format>
    </>
  )
}
