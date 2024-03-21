import postData from "./PostData.json";

interface postdata{
    id:number,
    title:string,
    date:string,
    time:string,
    content:string,
    img:string
}
const sortedPostsAsc =(filteredData:any[]):postdata[]=>{
    return filteredData.sort((a: postdata, b: postdata) => {
        const dateA = new Date(`${a.date} ${a.time}`).getTime();
        const dateB = new Date(`${b.date} ${b.time}`).getTime();
        return dateA - dateB;
    });};

// Get the first six elements from the sorted array

export default sortedPostsAsc;
