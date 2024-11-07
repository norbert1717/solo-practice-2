import Paragraph from './Paragraph'

function Page({ data }) {
    return (
        <div className="page">
        {data.map((string, index) => (
        <Paragraph key={index} index={index} string={string}/>
        ))}
        </div>
    )
}

export default Page;