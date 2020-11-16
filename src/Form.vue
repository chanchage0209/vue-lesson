<template>
    <div>
        <h1>{{text}}</h1>
        <input v-model="text">

        <h1>{{ checked }}</h1>
        <input type="checkbox" v-model="checked">

        <h1>{{ time }}</h1>
        <input type="checkbox" value="AM" v-model="time">
        <input type="checkbox" value="PM" v-model="time">

        <h1>{{ gender }}</h1>
        <input type="radio" value="male" v-model="gender">
        <input type="radio" value="female" v-model="gender">

        <h1>{{ char }}</h1>
        <select v-model="char" >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>

        <h1>{{ chars }}</h1>
        <select v-model="chars" >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
        </select>
        
    </div>
</template>

<script>
export default {
    data:()=>({
        text:"",
        checked:false,
        time:[],
        gender: "male",
        char:"A"
    })
}
</script>