export default function Test(){
    const arr = [1,2,3,4,5,6,7,8]
    return(
        
        <>
        {
            arr.filter((el)=>{return (el%2)==0}).map(el=>{
                return(
                    <p style={{color:"white"}}>{el}</p>
                )
            })
        }
        </>
    )
}