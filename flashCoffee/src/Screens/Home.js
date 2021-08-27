import React, {Component} from 'react';
import { StyleSheet, View, Text, Image, TouchableHighlight, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { wrap } from 'jest-runtime/node_modules/@types/yargs';
import { connect } from 'react-redux';


const Item = ({day, date, month, destination, scheduleTime}) => (
        <View style={styles.card2}>
            <Text style={{color: 'grey', fontWeight:'bold'}}>{day}</Text>
            <Text style={{fontSize:25, fontWeight:'bold', marginBottom:5}}>{date} {month}</Text>
            <Text style={{fontSize:18, fontWeight:'bold'}}>{destination}</Text>
            <Text>{scheduleTime}</Text>
        </View>
);

const renderItem = ({item}) => (
    <Item
    day = {item.day} 
    date = {item.date} 
    month = {item.month} 
    destination = {item.destination} 
    scheduleTime = {item.scheduleTime}>
    </Item>
);

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
    },
    row:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignContent: 'center'
    },
    headerContainer:{
        height:250,
        backgroundColor:'#fadb0c',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    headerText:{
        fontSize: 20,
        fontWeight:'bold',
        color:"#333",
        textAlign:'center',
        marginTop:35,
        marginHorizontal:10
    },
    imageProfile:{
        height:50,
        width:50,
        borderRadius:40,
        margin:20,
        marginRight:30
    },
    notifImage:{
        height:25,
        width:25,
        margin:30,
        marginTop:35
    },
    Time:{
        textAlign:'center',
        fontSize:60,
        fontWeight:'bold'
    },
    Date:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    subHeader:{
        margin:20,
        fontSize:18,
        fontWeight:'bold'
    },
    refresh:{
        margin:20,
        marginLeft:110,
        fontSize:15,
        color:'#fa275a'
    },
    card:{
        backgroundColor:'#f4f4f4',
        marginHorizontal:20,
        borderRadius:10,
        height:140,
        padding:10
    },
    cardHeader:{
        fontSize:20,
        fontWeight:'bold'
    },
    clockIn:{
        backgroundColor:'#5ec5bb',
        padding:5,
        fontWeight:'bold',
        color:'#fff',
        borderRadius:5,
        marginRight:80,
        marginTop:10
    },
    clockOut:{
        textAlign:'center',
        backgroundColor:'#fa285b',
        marginLeft:90,
        padding:5,
        fontWeight:'bold',
        color:'#fff',
        borderRadius:5,
        marginTop:10
    },
    timeIn:{
        fontSize:20,
        marginRight:30,
        marginLeft:10,
        marginTop:10
    },
    timeOut:{
        fontSize:20,
        marginLeft:20,
        marginTop:10
    },
    seeAll:{
        margin:20,
        marginLeft:140,
        fontSize:15,
        color:'#fa275a'
    },
    card2:{
        backgroundColor:'#f4f4f4',
        marginHorizontal:20,
        borderRadius:10,
        height:120,
        width:300,
        padding:10
    }
})



class Home extends React.Component{

    constructor(props){
        super(props);
        this.state={
            time:'',
            date:'',
            clockIn:'--:--',
            clockOut:'--:--'
        }
    }


    componentDidMount(){
        this.Clock = setInterval(() => this.dateTime(), 1000)
        console.log(this.props.DATA[0].address)
    }

    dateTime(){
    var dateFunc, hour, minute, day,dateNum, dayNum, month,monthDis, year;

    dateFunc = new Date()

    hour = dateFunc.getHours();
    minute = dateFunc.getMinutes();
    dayNum = dateFunc.getDay();

    if (dayNum == 1){
        day = 'Monday'
    }
    else if(dayNum==2){
        day = 'Tuesday'
    }
    else if(dayNum==3){
        day = 'Wednesday' 
    }
    else if(dayNum==4){
        day ='Thursday'
    }
    else if(dayNum==5){
        day ='Friday'
    }
    else if(dayNum==6){
        day ='Saturday'
    }
    else if(dayNum==7){
        day ='Sunday'
    }


    dateNum = dateFunc.getDate()
    month = dateFunc.getMonth()
    year = dateFunc.getFullYear()

    if(month == 1){
        var monthDis = 'January'
    }
    else if(month == 2){
        monthDis = 'February'
    }
    else if(month == 3){
        monthDis = 'March'
    }
    else if(month == 4){
        monthDis = 'April'
    }
    else if(month == 5){
        monthDis = 'May'
    }
    else if(month == 6){
        monthDis = 'June'
    }
    else if(month == 7){
        monthDis = 'July'
    }
    else if(month == 8){
        monthDis = 'August'
    }
    else if(month == 9){
        monthDis = 'September'
    }
    else if(month == 10){
        monthDis = 'October'
    }
    else if(month == 11){
        monthDis = 'November'
    }
    else if(month == 12){
        monthDis = 'December'
    }

    this.setState({
        time: hour + ':' + minute,
        date : day + ', ' + dateNum + " " + monthDis + " " + year
    })


    }    

    clockInFunc(){

        var hour = new Date().getHours();
        var minute = new Date().getMinutes();

        this.setState({
            clockIn: hour + ':' + minute
        })
        console.log(hour)
    }

    clockOutFunc(){

        var hour = new Date().getHours();
        var minute = new Date().getMinutes();

        this.setState({
            clockOut: hour + ':' + minute
        })
        console.log(hour)
    }

    render(){
    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.row}>
                    <Image source={{uri:'https://spesialis1.orthopaedi.fk.unair.ac.id/wp-content/uploads/2021/02/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg'}}
                    style={styles.imageProfile}
                    />
                    <Text style={styles.headerText}>LIVE ATTENDANCE</Text>
                    <TouchableHighlight>
                        <Image source={require('./bell.png')}
                        style={styles.notifImage}
                        />
                    </TouchableHighlight>
                </View>
                <View>
                <Text style={styles.Time}>{this.state.time}</Text>
                <Text style={styles.Date}>{this.state.date}</Text>
                </View>
            </View>
        <View style={styles.row}>
            <Text style = {styles.subHeader}>TODAY'S SCHEDULE</Text>
            <TouchableHighlight>
                <Text style={styles.refresh}>Refresh</Text>
            </TouchableHighlight>
        </View>
        <View style = {styles.card}>
            <Text style = {styles.cardHeader}>Mediterania</Text>
            <Text style = {styles.cardTimeRange}>08.00 - 17.00</Text>
            <View style={styles.row}>
                <Text style={styles.clockIn}>CLOCK IN</Text>
                <Text style={styles.clockOut}>CLOCK OUT</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.timeIn}>{this.state.clockIn}</Text>
                <Text style={{fontSize:30, color:'#c8ccce'}}> - - - - - - - - -</Text>
                <Text style={styles.timeOut}>{this.state.clockOut}</Text>
            </View>
        </View>
        <View style={styles.row}>
            <Text style = {styles.subHeader}>NEXT SCHEDULE</Text>
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('Schedule')}>
                <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
        </View>
        
        <ScrollView horizontal={true}>
            <FlatList
                data={this.props.DATA}
                renderItem={renderItem}
                keyExtractor={item=>item.id}
                numColumns={5}
            />
        </ScrollView>

        <View style={styles.row}>
            <TouchableHighlight 
            style={{backgroundColor:'#5bc4ba', padding:10,paddingHorizontal:30, margin:20, borderRadius:10, marginRight:55}}
            onPress={() => this.clockInFunc()}>
                <Text style={{fontSize:20, color:'white'}}>Clock In</Text>
            </TouchableHighlight>
            <TouchableHighlight style={{backgroundColor:'#b1b1b1', padding:10,paddingHorizontal:30, margin:20, borderRadius:10}}
            onPress={() => this.clockOutFunc()}>
                <Text style={{fontSize:20, color:'white'}}>Clock Out</Text>
            </TouchableHighlight>
        </View>
    </View>
    );
    }
}
    
function mapStateToProps(state){
    return{
        DATA: state.DATA
    }
}

export default connect(mapStateToProps)(Home);