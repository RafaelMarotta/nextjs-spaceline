import TimeLine from '../components/timeline/index'

export default function Home(props) {
  return (
    <div className="page-container p-5">
      <div className="d-flex justify-content-center text-center pb-5">
        <h1 className="w-100">EXPLORAÇÃO ESPACIAL QUAL SUA RELAÇÃO COM A TECNOLOGIA?</h1>
      </div>
      {
        props.periods.map((period) => (
          <TimeLine key="item.moderna" title={period.title} status={period.status} items={period.items}></TimeLine>
        ))
      }
    </div>
  )
}

export async function getStaticProps(context) {
  const data = await import('../public/periods.json')
  if (!data) {
    return {
      notFound: true,
    }
  }

  const periods = data.periods

  return {
    props: { periods }, // will be passed to the page component as props
  }
}