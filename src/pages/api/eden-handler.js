// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


let filter = {
    username: "admin",  
    earliestTime: Date.parse("1/25/2023 13:01"),
    latestTime: Date.parse("2/6/2024 5:02"),
    limit: 50,
}

export default async function getCreations() {
    // console.log('yo');
    // let eden = new EdenClient();
    // let result = await eden.getCreations(filter);
    // console.log(result);
}
