import postData from "./PostData.json";

interface postdata{
    id:number,
    title:string,
    date:string,
    time:string,
    content:string,
    img:string
}
const sortedPosts = postData.sort((a:postdata,b:postdata)=>{
    const dateA = new Date(`${a.date} ${a.time}`).getTime();
    const dateB = new Date(`${b.date} ${b.time}`).getTime();
    return dateB - dateA;
});

// Get the first six elements from the sorted array
const latestPosts = sortedPosts.slice(0,6);
const latestPosts3 = sortedPosts.slice(0,3);

export default latestPosts;
