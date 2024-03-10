import React from 'react'
export async function generateMetadata({params}){
return {
    title: "Blog | "+params.id,
}
}
function page({params}) {
  return (
    <div> 
        <h1> Blog Dynamic Page {params.id}</h1>

    </div>
  )
}

export default page