
const NewsItem = ({title, description, src, url}) => {

  return <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src} style={{height:"200px", width:"328px"}} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title ? title.slice(0, 40) : "Breaking news"}</h5>
    <p className="card-text">{description?description.slice(0,70):"It is a news report about current events, typically involving political, social, economic and cultural issues, and events that happen locally or internationally.".slice(0,70)}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
}

export default NewsItem;