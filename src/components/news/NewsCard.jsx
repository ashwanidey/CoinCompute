export const NewsCard = ({data}) => {
  const dateObject = new Date(data.createdAt);
  const formattedDate = `${dateObject.getDate()} ${dateObject.toLocaleString('default', { month: 'short' })} ${dateObject.getFullYear()}`;
  return (
    <>
    <div className='flex h-full flex-col  bg-[#f1f6ff] rounded-[15px]
    '>
        <img src={data.thumbnail} alt="" className='rounded-t-[15px]'
       
      />
      <div className='px-[12px] pb-[12px] pt-[8px]' >

        <div className='flex'>
        <div className='text-[13px]'>{formattedDate}</div>
        </div>
    <h4 className='font-[700] text-[16px] line-clamp-3 color-[#000000]'>{data.title}</h4></div>
    
    </div>
    </>
  )
}