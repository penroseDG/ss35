class Student11 {
    id:number
    name:string
    enrolledCourses: Course[]
    constructor(id:number,name:string){
      this.id = id;
      this.name = name;
      this.enrolledCourses = [];
    }
    // phương thức thêm khóa học cho sinh viên đăng kí
    enroll(course: Course):void{
      this.enrolledCourses.push(course);
      // for(let i=0; i< this.enrolledCourses.length; i++){
        console.log(`${this.name} Đã đăng kí khóa học : ${course.title}`);
  
      // }
    }
  }
  // tạo class bài tập cho bài học
  class Asignment {
    id:number
    name:string
    content: string
    constructor(id:number,name:string,content:string){
      this.id = id;
      this.name = name;
      this.content = content;
    }
  
  }
  // tạo class bài học cho khóa học
  class Lessons{
    id:number
    title: string
    asignment: Asignment[]
    constructor(id:number,title:string,asignment:Asignment[]){
      this.id = id
      this.title = title;
      this.asignment = [];
    }
  }
  // tạo class hướng dẫn
  class Instructor {
    id:number
    name:string
    constructor(id:number, name:string){
      this.id = id;
      this.name = name;
    }
    // tạo khóa học
    createCourse(id:number,title:string,instructor:string,lessons: Lessons[],assesment: Assesment[]): Course{
      return new Course (1, "M 24", "mai", [this.createLesson(1,"lap trinh",[this.createAsignment(1,"bt1","tinh tong")])], [])
    }
    // tạo danh sách bài học
    createLesson(id:number,title:string,asignment:Asignment[]): Lessons{
      asignment.push(this.createAsignment(2,"bt1","tinh tong"));//
      console.log("222222222222",asignment);
      return {id: id, title: title, asignment : asignment};
      
    }
    
    // tạo danh sách bài tập
    createAsignment(id:number,name:string,content:string): Asignment{
      return new Asignment(id,name,content);
    }
    // tạo danh sách bài kiểm tra
  
    createAssesment(id:number,name:string,content:string): Assesment{
      return new Assesment(2, "Bài kht1", "thi lần 1")
    }
  }
  let result = new Instructor(1,"mao").createLesson(1,"bai hoc 1",[]);
  console.log("1111",result);
  
  // tạo class khóa học cho sinh viên đăng kí học
  class Course {
    id:number
    title: string
    instructor: string
    lessons: Lessons[] 
    assesment: Assesment[]
    constructor(id:number,title:string,instructor:string,lessons: Lessons[],assesment: Assesment[]){
      this.id = id;
      this.title = title;
      this.instructor = instructor;
      this.lessons = [];
      this.assesment = [];
    }
  }
  
  // tạo class bài kiểm tra cho khóa học
  class Assesment {
    id:number
    name:string
    content:string
    constructor(id:number,name:string,content:string){
      this.id = id;
      this.name = name;
      this.content = content;
    }
  }