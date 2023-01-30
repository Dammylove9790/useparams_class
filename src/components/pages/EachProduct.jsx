

const container_style = {border:'1px solid brown', borderRadius:'10px', padding:'15px 20px', margin:'15px', width:'20%'}
const imgstyle = {width:'100%'}

function EachProduct(props){
  const {title, image, price} = props.productValue
  const index = props.productIndex
        return (
    <div style={container_style}>
      <img src={image} alt={title} style={imgstyle}/>
      <h4> ID: {index} </h4>
      <h5> Product Name: {title} </h5>
      <h6> Price: {price} </h6>
    </div>
    )
}

export default EachProduct;