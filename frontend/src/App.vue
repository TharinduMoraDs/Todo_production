<template>

  <div id="app">
<hr>
<h1 class="title" align="center"> To-Do </h1>
<hr>
<!--   update model       -->
<my-modal v-show="show" @close='show=false'>
<form @submit.prevent="update(Id)" method="PUT">
  <div class="box">
  <div class="form-group">
    <label><b>Update Your Task</b></label>
    <input type="text" class="form-control" placeholder="Update your Task" v-model="updateTask.name" required>
  </div>
  <button type="submit" class="btn btn-primary">Update</button>
  </div>
</form>
</my-modal>
<!--   update model       -->

<!--   delete model       -->
<mydelete-modal v-show="showdelete" @close='showdelete=false'>
  <div class="alert alert-danger">
    <div class="box">
  <div>
     
    <label><b>Are You Sure ?</b></label>
    <br>
  </div>
  <button type="submit" class="btn btn-danger"  v-on:click="deletetask(Id)">Yes</button>
  <button type="submit" class="btn btn-success" v-on:click="showdelete=false">No</button>
  </div>
</div>
</mydelete-modal>
<!--   delete model       -->

<!--   Form       -->    
<form  @submit.prevent="saveIt" method="POST">
  <div class="container">
    <div class="form-row">
  <div class="form-group col-md-5" >
    <label><b>Task</b></label>
    <input type="text" class="form-control"  placeholder="Enter new Task" v-model="newTask.name" required>
  </div>
   <div class="form-group col-md-5">
    <label><b>Time</b></label>
    <input id="datefield" class="form-control" type='date' min='' v-model="newTask.time" required>
  </div>
</div>
  <button type="submit" class="btn btn-primary" >Enter</button> 
  </div>
</form>

<br>
<br>

<!--   Display Tasks       -->
<div class="container">
<table class="table table-hover">
           <thead>
            <tr>
                <td><b>Task</b></td>
                <td><b>Date</b></td>
                <td><b></b></td>
                <td><b></b></td>  
            </tr>
            </thead>
      <tbody>
      <tr v-for=" task in  tasks">
      <td>{{ task.name}}</td>
      <td>{{ task.time}}</td>
      <td><button  type="button" class="btn btn-warning"  v-on:click="show=true;Id=task._id" >Edit</button></td>
      <td><button type="button" class="btn btn-danger" v-on:click="showdelete=true;Id=task._id">Delete</button></td>
      </tr>
      </tbody>
</table>
</div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      newTask: {
        name: "",
        time: ""
      },
      updateTask: {
        name: ""
      },
      Id: "",

      show: false,
      showdelete: false,

      tasks: [],
      errors: [],
      posterrors: [],
      message: ""
    };
  },

  mounted() {
    axios
      .get("http://localhost:8000/api/task")
      .then(response => {
        this.tasks = response.data;
        console.log(response);
      })
      .catch(e => {
        this.errors.push(e);
      });
  },

  methods: {
    saveIt() {
      axios
        .post("http://localhost:8000/api/task", this.newTask)
        .then(response => {
          console.log(response);
          this.message = response.data;
          window.location.reload();
        })
        .catch(e => {
          this.posterrors.push(e);
        });
    },
    deletetask(Id) {
      axios.delete("http://localhost:8000/api/task/" + Id).then(response => {
        console.log(response);
        window.location.reload();
      });
    },
    update(Id) {
      axios
        .put("http://localhost:8000/api/task/" + Id, this.updateTask)
        .then(response => {
          console.log(response);
          window.location.reload();
        });
    }
  }
};
</script>

<style>
</style>
