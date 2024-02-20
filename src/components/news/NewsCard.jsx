export const NewsCard = ({data}) => {
  const dateObject = new Date(data.createdAt);
  const formattedDate = `${dateObject.getDate()} ${dateObject.toLocaleString('default', { month: 'short' })} ${dateObject.getFullYear()}`;
  return (
    <>
    <div className='flex h-[350px] flex-col  bg-[#f1f6ff] rounded-[15px] 
    '>
        {/* <img src={data.thumbnail} className='rounded-t-[15px] w-full'
       width="100px" height="200px  "
      /> */}
      <div style={{ background: `url(${data.thumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center',borderRadius :"15px 15px 0px 0px" }} className="w-[100%] h-[300px]"></div>


      <div className='px-[12px] pb-[12px] flex-col pt-[8px] flex items-center justify-between h-full' >

        <div className="flex w-full justify-between">
        <div className='md:text-[13px] text-[10px] w-full '>{formattedDate}</div>
        <p className="md:text-[13px] text-[10px]">CoinDesk</p>
        </div>
        
    <div className="flex w-full items-center font-[700] mt-2 text-[16px] color-[#000000]"><h4 className="line-clamp-3">{data.title}</h4></div>
      <div className="flex justify-end">
    <a
              href={data.url}
              className="inline-block rounded-full border border-[#242424] md:px-7 px-3 py-2 text-base font-medium text-[white] transition hover:border-primary hover:bg-transparent hover:text-black dark:border-dark-3 dark:text-dark-6 mt-4 mb-4 bg-[#3080E8]"
            > View Details</a> 
            </div>
    
    </div>
    
    </div>
    </>
  )
}