import { Application, Router } from "https://deno.land/x/oak/mod.ts"

//Model
interface Course{
  name:string;
  price:number;
  certification:boolean;
}

//Data

let courses:Array<Course> = [
  {
    name:"Course 1",
    price:100,
    certification:true
  },
  {
    name:"Course 2",
    price:100,
    certification:false
  },
  {
    name:"Course 3",
    price:200,
    certification:true
  }
]

//controllers
const getCourses=({response}:{response: any})=>{
  response.body = courses
}


const addCourses= async ({request, response}:{request:any, response: any})=>{
  const body  = await request.body()
  const course:Course = body.value
  courses.push(course)
  response.body = {courseAdded: "Sucess"}
  response.status = 200
}


//routers
const router = new Router()
const app = new Application()
const PORT = 3000

router
  .get("/learn", getCourses)
  .post("/create", addCourses)

app.use(router.routes())
app.use(router.allowedMethods())


await app.listen({port:PORT})