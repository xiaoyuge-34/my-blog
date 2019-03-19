import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from  './components/AddBlog.vue'
import SingleBlog from  './components/SingleBlog.vue'
import EditBlog from  './components/EditBlog.vue'
export default [
  {path:"/showblogs",component:ShowBlogs},
  {path:"/addblog",component:AddBlog},
  {path:"/showblogs/:id",component:SingleBlog},
  {path:"/editBlog/:id",component:EditBlog}
]
