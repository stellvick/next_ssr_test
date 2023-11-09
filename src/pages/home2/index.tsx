import 'dotenv/config'

export async function getServerSideProps() {
const key = process.env.API_KEY
const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
const data = await res.json()
return { props: { data } }
}

export default function Page({ data }: any) {
    return <pre>{JSON.stringify(data, null, 4)}</pre>
  }