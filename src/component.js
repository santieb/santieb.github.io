import Card from "./cardProject"

const Vista = ({ id=0 }) => {

  if(id === 0){
    return (
      <div className="">
        <h1>Santiago Barreto</h1>
        <h2>Desarrollador web trainee</h2>
      </div>
    )
  }

  if(id === 1){
    return (
      <div>
        <h1>ME</h1>
      </div>
    )
  }


  if(id === 2){
    return (
    <div>
      <h1>PROJECTS</h1>
      <div>
      <Card
        img="https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-vector-fast-food-restaurant-image_2239806.jpg"
        title="Delilah Resto API"
        description="Delillah resto es una api que">
      </Card>
      <Card
        img="https://png.pngtree.com/element_our/20200610/ourlarge/pngtree-vector-fast-food-restaurant-image_2239806.jpg"
        title="Delilah Resto API"
        description="Delillah resto es una api que">
      </Card>
      </div>
    </div>
    )
  }

}

export default Vista