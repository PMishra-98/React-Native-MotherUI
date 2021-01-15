import React, { Component } from "react";
import {
   TextInput,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Form,
    Image,
    FlatList,
    TouchableOpacity
  } from 'react-native';
  
//import axios from "axios";
//import queryString from 'query-string';
//import logo from './smart_champion_logo.png';


class MotherUI extends Component {
 
 constructor(props) {
    super(props);

    this.state = {
      studentDetails: null,
      loading: true,
      marks: "",
      arr: [],
   
    };
  }
/*
  axiosConfig = {
    headers: {
        'Content-Type': undefined,
        "Access-Control-Allow-Origin": "*",
    }
  };

  async componentDidMount() {
    let {token, CLCode} = queryString.parse(this.props.location.search);
    console.log(token);
    //let url = `https://script.google.com/macros/s/AKfycbytHlXCwBX7z20C0JviJGhIdJHAgraxQgHK81s_qrmTjVGcdPBK/exec?token=${token}`;

    let url = `https://saarthi-node-backend.herokuapp.com/studentDetails?token=${token}&CLCode=${CLCode}`;
    let {data: studentDetails} = await axios.get(url);
    this.state.tempVal = studentDetails.level;
    for(let i=0;i<3;i++){
      this.state.arr.push({wsNO:this.state.tempVal,marks:""});
      this.state.tempVal= this.state.tempVal+1;
    }
    console.log("this.state.arr");
    this.setState({ studentDetails: studentDetails, arr: this.state.arr, loading: false });
  }

  handleChange=(e)=>{
    let {marks,arr}= this.state
    let {currentTarget:input}=e
    console.log("sasa",input)
    arr[input.name].marks=input.value
    this.setState({arr:arr})
  }

  uploadMarks=async(index)=> {
    let {CLCode} = queryString.parse(this.props.location.search);
    let url = `https://saarthi-node-backend.herokuapp.com/postDetails?CLCode=${CLCode}&token=${this.state.studentDetails.token}&marks=${this.state.arr[index].marks}&worksheetNo=${this.state.arr[index].wsNO}`;
    console.log("sdhdh",this.state)
     let {data: response} = await axios.post(url, {currentMarks: this.state.arr[index].marks, 
                                            rmCode: this.state.studentDetails.rmcode, 
                                            tokenNumber: this.state.studentDetails.token,
                                            currentDate: this.state.studentDetails.date,
                                            workSheet: this.state.arr[index].wsNO});

    console.log("sscc",response)
    this.state.arr[index].postStatus = response.status;
    this.setState({postStatus: response.status});
    //this.componentDidMount();
  }
*/ 
  render() {
    //let { studentDetails, loading, marks, arr } = this.state;
  const state=this.state;
    return (
        <>
      
        <View style={styles.body}>
         <View style={styles.container}>
           <View style={{ flexDirection:'row',}}>
           <Image source={require('./images/logo.png')} style={{width:100,height:100}}/>
           <View>
           <Text style={styles.textShow}>Name:</Text>
            <Text style={styles.textShow}>Date:</Text>
            <Text style={styles.textShow}>Day:</Text>
           </View>
           </View>
          
           <View style={{marginHorizontal:15,textAlign:'center'}}>
           <FlatList numColumns={2}
           data={["Worksheet No.","Marks"]}
           renderItem={({item})=>{
               return <Text style={styles.row1}>{item}</Text>
           }}
           keyExtractor={
            (index)=>{return index}
          }
          />
           <FlatList 
           data={["Worksheet No.","Worksheet No."]}
           renderItem={({item})=>{
               return <View style={{flexDirection:'row'}}>
                 <Text style={styles.row2}>{item}</Text>
                 <View style={styles.row2}>
                   <View style={{flexDirection:'row',}}>
                   <TextInput style={styles.input}/>
                   <TouchableOpacity style={{ alignItems: 'center',backgroundColor: '#fada5e',padding:10,width:80}} >
                      <Text> Submit </Text>
                    </TouchableOpacity>
                   </View>
                  </View>
                 </View>
                      
              }}
           keyExtractor={
             (index)=>{return index}
           }
          />
          </View>
        <Text>{'\n'}</Text>  
          <Text style={{textAlign:'center',fontSize:20}}>कल की वर्क शीट :-{'\n'}{'\n'}
          कल के मार्क्स :-{'\n'}{'\n'}
          कल के मार्क्स :-{'\n'}{'\n'}
          फीस देने की तारीख :-{'\n'}{'\n'}
          RM फ़ोन नंबर :-{'\n'}{'\n'}
          </Text>      
      </View>
   </View>
   </>

    )
  }
}
const styles = StyleSheet.create({
   body:{
       borderWidth:5,
      backgroundColor:'#7b9fe7',
      borderColor:'#000000'
    },
    container:{
        margin:10,
        borderWidth:5,
       backgroundColor:'#7b9fe7',
       borderColor:'#000000',
     
     },
   textShow:{
     marginLeft:30,
    color: '#3A0844',
    textAlign:'center',
    fontSize:25,
    fontWeight:'bold',
    textDecorationLine:'underline'
   },
   row1:{
     textAlign:'center',
     width:180,
     height:30, 
     backgroundColor:'#7b9fe7',  
     borderWidth:1,
   borderColor:'#FFFFFF',
  fontSize:20
},
row2:{
  textAlign:'center',
  width:180,
  height:40, 
  backgroundColor:'#7b9fe7',  
  borderWidth:1,
borderColor:'#FFFFFF',
fontSize:20
},
input:{
  borderWidth:1,
  borderColor:'#777',
  padding:10,
 marginLeft:15,
  width:50,
 
  backgroundColor:'white'
}
  });
export default MotherUI;