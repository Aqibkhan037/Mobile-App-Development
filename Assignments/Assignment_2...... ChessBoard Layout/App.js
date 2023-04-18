import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Button } from 'react-native';


export default function App() {
  return (
    
       
      <View style={[styles.board,{backgroundColor:'white'}]}>

        <View style={styles.row}>

        <Text style={styles.text}>8</Text>

            <View style={[styles.cell, styles.greyCell]} >
               <Text style={{color:'white',opacity:0.5}}>A</Text>
            </View>

            <View style={styles.cell} >  
              <Text style={{color:'black',opacity:0.5}}>B</Text>
            </View>

            <View style={[styles.cell, styles.greyCell]} > 
              <Text style={{color:'white',opacity:0.5}}>C</Text>
            </View>

            <View style={styles.cell} >   
              <Text style={{color:'black',opacity:0.5}}>D</Text>
            </View>

            <View style={[styles.cell, styles.greyCell]}>  
            <Text style={{color:'white',opacity:0.5}}>E</Text>
            </View>

            <View style={styles.cell} > 
              <Text style={{color:'black',opacity:0.5}}>F</Text>
            </View>

            <View style={[styles.cell, styles.greyCell]} >  
            <Text style={{color:'white',opacity:0.5}}>G</Text>
            </View>

            <View style={styles.cell} > 
            <Text style={{color:'black',opacity:0.5}}>H</Text>
            </View>

          <Text style={styles.text2}>8</Text>
          
        </View>


        <View style={styles.row}>
        <Text style={styles.text}>7</Text>

          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]}/>
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <Text style={styles.text2}>7</Text>

        </View>


        <View style={styles.row}>

          <Text style={styles.text}>6</Text>

          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />

          <Text style={styles.text2}>6</Text>

        </View>


        <View style={styles.row}>

        <Text style={styles.text}>5</Text>

          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]}/>
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />

          <Text style={styles.text2}>5</Text>
        </View>



        <View style={styles.row}>

        <Text style={styles.text}>4</Text>

          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />

          <Text style={styles.text2}>4</Text>
        </View>

        <View style={styles.row}>

        <Text style={styles.text}>3</Text>

          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]}/>
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <Text style={styles.text2}>3</Text>

        </View>


        <View style={styles.row}>
        <Text style={styles.text}>2</Text>
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <View style={[styles.cell, styles.greyCell]} />
          <View style={styles.cell} />
          <Text style={styles.text2}>2</Text>
        </View>

        <View style={styles.row}>
        <Text style={styles.text}>1</Text>

          <View style={styles.cell} >
            <Text style={{color:'black',opacity:0.5,marginTop:20,marginLeft:2}}>A</Text>
          </View>

          <View style={[styles.cell, styles.greyCell]} >
            <Text style={{color:'white',opacity:0.5,marginTop:20,marginLeft:2}}>B</Text>
          </View>

          <View style={styles.cell} > 
            <Text style={{color:'black',opacity:0.5,marginTop:20,marginLeft:2}}>C</Text>
          </View>

          <View style={[styles.cell, styles.greyCell]}> 
            <Text style={{color:'white',opacity:0.5,marginTop:20,marginLeft:2}}>D</Text>
          </View>

          <View style={styles.cell} > 
            <Text style={{color:'black',opacity:0.5,marginTop:20,marginLeft:2}}>E</Text>
          </View>

          <View style={[styles.cell, styles.greyCell]} > 
            <Text style={{color:'white',opacity:0.5,marginTop:20,marginLeft:2}}>F</Text>
          </View>

          <View style={styles.cell} > 
            <Text style={{color:'black',opacity:0.5,marginTop:20,marginLeft:2}}>G</Text>
          </View>

          <View style={[styles.cell, styles.greyCell]} > 
          <Text style={{color:'white',opacity:0.5,marginTop:20,marginLeft:2}}>H</Text>
          </View>

          <Text style={styles.text2}>1</Text>
        </View>

        
      
      </View>


  );
}

const styles = StyleSheet.create({
  text:{
    fontSize:12, 
    backgroundColor:'white',
    marginTop:11,
    marginRight:3,
    fontWeight:'bold'
  },
  text2:{
    fontSize:12, 
    backgroundColor:'white',
    marginTop:11,
    marginLeft:3,
    fontWeight:'bold'
  },

  board: {
    width: 340,
    height: 340,
    marginTop:250,
    marginLeft:40,

    backgroundColor: '#f5deb3', // Set the background color of the board
  },
  row: {
    flex: 1,
    flexDirection: 'row',

  },
  cell: {
    flex: 1,
    backgroundColor: 'white', // Set the color of the cell
    borderWidth: 1, // Add a border to each cell
    borderColor: 'black', // Set the color of the border
  },
  greyCell: {
    backgroundColor: 'black', // Set the color of the black cells
  },
});
