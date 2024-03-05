import React, {Component} from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import NativeSelect from 'react-select';
import {Grid, Paper} from "@material-ui/core";
import Divider from '@mui/material/Divider';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Stack from '@mui/material/Stack';
import blankScroll from '../../BlankScroll.png'
import './main.css';
import mytext from '../KJVTranslation';
import worldenglish from '../WorldEnglishTranslation';
import RefreshIcon from '@mui/icons-material/Refresh';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Refresh from "@mui/icons-material/Refresh";
import CheckIcon from '@mui/icons-material/Check';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { FastRewind } from "@mui/icons-material";
import Switch from "react-switch";
const aquaticCreatures = [
    { label: 'Shark', value: 'Shark' },
    { label: 'Dolphin', value: 'Dolphin' },
    { label: 'Whale', value: 'Whale' },
    { label: 'Octopus', value: 'Octopus' },
    { label: 'Crab', value: 'Crab' },
    { label: 'Lobster', value: 'Lobster' },
  ];
  const books = [
    'Genesis',         'Exodus',          'Leviticus',     'Numbers',
    'Deuteronomy',     'Joshua',          'Judges',        'Ruth',
    '1 Samuel',        '2 Samuel',        '1 Kings',       '2 Kings',
    '1 Chronicles',    '2 Chronicles',    'Ezra',          'Nehemiah',
    'Esther',          'Job',             'Psalms',         'Proverbs',
    'Ecclesiastes',    'Song of Solomon', 'Isaiah',        'Jeremiah',
    'Lamentations',    'Ezekiel',         'Daniel',        'Hosea',
    'Joel',            'Amos',            'Obadiah',       'Jonah',
    'Micah',           'Nahum',           'Habakkuk',      'Zephaniah',
    'Haggai',          'Zechariah',       'Malachi',       'Matthew',
    'Mark',            'Luke',            'John',          'Acts',
    'Romans',          '1 Corinthians',   '2 Corinthians', 'Galatians',
    'Ephesians',       'Philippians',     'Colossians',    '1 Thessalonians', 
    '2 Thessalonians', '1 Timothy',       '2 Timothy',     'Titus',
    'Philemon',        'Hebrews',         'James',         '1 Peter',
    '2 Peter',         '1 John',          '2 John',        '3 John',
    'Jude',            'Revelation'
]

const newTestamentBooks = [
    "Matthew",
    "Mark",
    "Luke",
    "John",
    "Acts",
    "Romans",
    "1 Corinthians",
    "2 Corinthians",
    "Galatians",
    "Ephesians",
    "Philippians",
    "Colossians",
    "1 Thessalonians",
    "2 Thessalonians",
    "1 Timothy",
    "2 Timothy",
    "Titus",
    "Philemon",
    "Hebrews",
    "James",
    "1 Peter",
    "2 Peter",
    "1 John",
    "2 John",
    "3 John",
    "Jude",
    "Revelation"
  ];
  
const chapters = [50, 40, 27, 36, 34, 24, 21, 
    4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150, 31, 12, 
    8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4, 28, 16, 24, 
    21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1, 
    1, 22]
const verses = [31,25,24,26,32,22,24,22,29,32,32,20,18,24,21,16,27,33,38,18,34,24,20,67,34,35,46,22,35,43,55,32,20,31,29,43,36,30,23,23,57,38,34,34,28,34,31,22,33,26,22,25,22,31,23,30,25,32,35,29,10,51,22,31,27,36,16,27,25,26,36,31,33,18,40,37,21,43,46,38,18,35,23,35,35,38,29,31,43,38,17,16,17,35,19,30,38,36,24,20,47,8,59,57,33,34,16,30,37,27,24,33,44,23,55,46,34,54,34,51,49,31,27,89,26,23,36,35,16,33,45,41,50,13,32,22,29,35,41,30,25,18,65,23,31,40,16,54,42,56,29,34,13,46,37,29,49,33,25,26,20,29,22,32,32,18,29,23,22,20,22,21,20,23,30,25,22,19,19,26,68,29,20,30,52,29,12,18,24,17,24,15,27,26,35,27,43,23,24,33,15,63,10,18,28,51,9,45,34,16,33,36,23,31,24,31,40,25,35,57,18,40,15,25,20,20,31,13,31,30,48,25,22,23,18,22,28,36,21,22,12,21,17,22,27,27,15,25,23,52,35,23,58,30,24,42,15,23,29,22,44,25,12,25,11,31,13,27,32,39,12,25,23,29,18,13,19,27,31,39,33,37,23,29,33,43,26,22,51,39,25,53,46,28,34,18,38,51,66,28,29,43,33,34,31,34,34,24,46,21,43,29,53,18,25,27,44,27,33,20,29,37,36,21,21,25,29,38,20,41,37,37,21,26,20,37,20,30,54,55,24,43,26,81,40,40,44,14,47,40,14,17,29,43,27,17,19,8,30,19,32,31,31,32,34,21,30,17,18,17,22,14,42,22,18,31,19,23,16,22,15,19,14,19,34,11,37,20,12,21,27,28,23,9,27,36,27,21,33,25,33,27,23,11,70,13,24,17,22,28,36,15,44,11,20,32,23,19,19,73,18,38,39,36,47,31,22,23,15,17,14,14,10,17,32,3,22,13,26,21,27,30,21,22,35,22,20,25,28,22,35,22,16,21,29,29,34,30,17,25,6,14,23,28,25,31,40,22,33,37,16,33,24,41,30,24,34,17,6,12,8,8,12,10,17,9,20,18,7,8,6,7,5,11,15,50,14,9,13,31,6,10,22,12,14,9,11,12,24,11,22,22,28,12,40,22,13,17,13,11,5,26,17,11,9,14,20,23,19,9,6,7,23,13,11,11,17,12,8,12,11,10,13,20,7,35,36,5,24,20,28,23,10,12,20,72,13,19,16,8,18,12,13,17,7,18,52,17,16,15,5,23,11,13,12,9,9,5,8,28,22,35,45,48,43,13,31,7,10,10,9,8,18,19,2,29,176,7,8,9,4,8,5,6,5,6,8,8,3,18,3,3,21,26,9,8,24,13,10,7,12,15,21,10,20,14,9,6,33,22,35,27,23,35,27,36,18,32,31,28,25,35,33,33,28,24,29,30,31,29,35,34,28,28,27,28,27,33,31,18,26,22,16,20,12,29,17,18,20,10,14,17,17,11,16,16,13,13,14,31,22,26,6,30,13,25,22,21,34,16,6,22,32,9,14,14,7,25,6,17,25,18,23,12,21,13,29,24,33,9,20,24,17,10,22,38,22,8,31,29,25,28,28,25,13,15,22,26,11,23,15,12,17,13,12,21,14,21,22,11,12,19,12,25,24,19,37,25,31,31,30,34,22,26,25,23,17,27,22,21,21,27,23,15,18,14,30,40,10,38,24,22,17,32,24,40,44,26,22,19,32,21,28,18,16,18,22,13,30,5,28,7,47,39,46,64,34,22,22,66,22,22,28,10,27,17,17,14,27,18,11,22,25,28,23,23,8,63,24,32,14,49,32,31,49,27,17,21,36,26,21,26,18,32,33,31,15,38,28,23,29,49,26,20,27,31,25,24,23,35,21,49,30,37,31,28,28,27,27,21,45,13,11,23,5,19,15,11,16,14,17,15,12,14,16,9,20,32,21,15,16,15,13,27,14,17,14,15,21,17,10,10,11,16,13,12,13,15,16,20,15,13,19,17,20,19,18,15,20,15,23,21,13,10,14,11,15,14,23,17,12,17,14,9,21,14,17,18,6,25,23,17,25,48,34,29,34,38,42,30,50,58,36,39,28,27,35,30,34,46,46,39,51,46,75,66,20,45,28,35,41,43,56,37,38,50,52,33,44,37,72,47,20,80,52,38,44,39,49,50,56,62,42,54,59,35,35,32,31,37,43,48,47,38,71,56,53,51,25,36,54,47,71,53,59,41,42,57,50,38,31,27,33,26,40,42,31,25,26,47,26,37,42,15,60,40,43,48,30,25,52,28,41,40,34,28,41,38,40,30,35,27,27,32,44,31,32,29,31,25,21,23,25,39,33,21,36,21,14,23,33,27,31,16,23,21,13,20,40,13,27,33,34,31,13,40,58,24,24,17,18,18,21,18,16,24,15,18,33,21,14,24,21,29,31,26,18,23,22,21,32,33,24,30,30,21,23,29,23,25,18,10,20,13,18,28,12,17,18,20,15,16,16,25,21,18,26,17,22,16,15,15,25,14,18,19,16,14,20,28,13,28,39,40,29,25,27,26,18,17,20,25,25,22,19,14,21,22,18,10,29,24,21,21,13,14,25,20,29,22,11,14,17,17,13,21,11,19,17,18,20,8,21,18,24,21,15,27,21];
class Main extends Component {
    constructor(props) {
        super(props);
        // const books = [
        //     'Genesis',         'Exodus',          'Leviticus',     'Numbers',
        //     'Deuteronomy',     'Joshua',          'Judges',        'Ruth',
        //     '1 Samuel',        '2 Samuel',        '1 Kings',       '2 Kings',
        //     '1 Chronicles',    '2 Chronicles',    'Ezra',          'Nehemiah',
        //     'Esther',          'Job',             'Psalm',         'Proverbs',
        //     'Ecclesiastes',    'Song of Solomon', 'Isaiah',        'Jeremiah',
        //     'Lamentations',    'Ezekiel',         'Daniel',        'Hosea',
        //     'Joel',            'Amos',            'Obadiah',       'Jonah',
        //     'Micah',           'Nahum',           'Habakkuk',      'Zephaniah',
        //     'Haggai',          'Zechariah',       'Malachi',       'Matthew',
        //     'Mark',            'Luke',            'John',          'Acts',
        //     'Romans',          '1 Corinthians',   '2 Corinthians', 'Galatians',
        //     'Ephesians',       'Philippians',     'Colossians',    '1 Thessalonians', 
        //     '2 Thessalonians', '1 Timothy',       '2 Timothy',     'Titus',
        //     'Philemon',        'Hebrews',         'James',         '1 Peter',
        //     '2 Peter',         '1 John',          '2 John',        '3 John',
        //     'Jude',            'Revelation'
        // ];
        this.state = 
        {
            fullBible: worldenglish,
            book: "",
            chapter: "",
            verseNum: "",
            verseText: "",
            verseIndex: 0,
            selectedBook: "",
            varChapters: [],
            bookIndex: 0,
            varVerses: [],
            selectedChapter: 0,
            selectedVerse: 0,
            bookDir: -10,
            chapterDir: -10,
            verseDir: -10,
            guessesVal: ['1','2','3','4','5','6','7'],
            bookGuesses: [],
            chapterGuesses: [],
            verseGuesses: [],
            bookGuessesVal: [],
            chapterGuessesVal: [],
            verseGuessesVal: [],
            actualBook: "",
            showRealVerse: false,
            newTestMode: false,
            currentStreak: 0,
            wrong: 0,
            right: 0,
            correctAnswer: false,
            dailyVerse: false
        };
      }

      componentDidMount(){
        const words = this.state.fullBible.split(/([0-9]+[0-9]+[0-9]+:[0-9]+[0-9]+[0-9]+)/);
        var chaptersArray = [];
        for(var j = 3; j < words.length; j++){
            if(words[j].includes(":001")){
                chaptersArray.push(parseInt(words[j-2].split(":")[1]))
            }
        }
        var verseArray = [];
        var temp = 0;
        for(var h = 3; h < words.length; h++){
            temp++;
            if(words[h].includes(":001")){
                verseArray.push(temp);
                temp = 0;
            }
        }
        console.log("Final Verse Array "+ verseArray);
        console.log("verses array "+ chaptersArray)
        console.log("Length of bible " + words.length);
        var ind = Math.floor(Math.random() * words.length);
        if(ind % 2 !== 0){
            ind++;
        }
        var bookOfBibleInd;
        for(var i = ind; i>-1; i--){
            if(words[i] ===  "001:001"){
                bookOfBibleInd = i-1;
                break;
            }
        }
        let show = words[ind];
        var book = words[bookOfBibleInd];
        var finalBook  = book.substring(book.indexOf("Book"))
        console.log("Book of bible " + book.substring(book.indexOf("Book")));
        console.log("CHAPTER VERSE " + words[ind-1]);
        console.log("ACTUAL VERSE "+ show);
        this.setState({
            book: book.substring(book.indexOf("Book")),
            chapter: parseInt(words[ind-1].split(":")[0]),
            verseNum: parseInt(words[ind-1].split(":")[1]),
            verseText: show,
            verseIndex: ind,
        })
        
      }

    calcChapters(bookInd){
        var tempChaps = [];
        for(var i = 1; i <= chapters[bookInd]; i++){
            var temp = i.toString();
            tempChaps.push(temp);
        }
        return tempChaps;
    }
    selectedBook(book){
        var bookInd = books.indexOf(book.value);
        var tempChaps = this.calcChapters(bookInd);
        // for(var i = 0; i <= chapters[bookInd]; i++){
        //     tempChaps.push[i.toString()];
        // }
        this.setState({
            selectedBook: book.value,
            varChapters: tempChaps,
            bookIndex: bookInd
        })
    }

    calcVerses(chapter){
        var tempVerses = [];
        for(var i = 1; i <= chapter; i++){
            var temp = i.toString();
            tempVerses.push(temp);
        }
        return tempVerses;
    }
    
    selectedChapter(chapter){
        console.log(chapter);
        var total = 0;
        for(var i = 0; i < this.state.bookIndex; i++){
            total+=chapters[i];
        }
        var tempVerses = this.calcVerses(verses[total+(parseInt(chapter.value)-1)]);
        // for(var i = 0; i <= chapters[bookInd]; i++){
        //     tempChaps.push[i.toString()];
        // }
        this.setState({
            varVerses: tempVerses,
            selectedChapter: parseInt(chapter.value)
        })
    }

    selectedVerses(verse){
        this.setState({
            selectedVerse: parseInt(verse.value)
        })
    }

    submit(){
        var book;
        var chapter;
        var verse;
        var actualBook;
        if(this.state.book.includes(this.state.selectedBook) && this.state.selectedChapter=== this.state.chapter && this.state.selectedVerse === this.state.verseNum){
            alert("WELL DONE YOU GOT IT");
            this.setState({
                currentStreak: this.state.currentStreak+1,
                right: this.state.right + 1,
                correctAnswer: true
            })
        }
        if(this.state.bookGuessesVal.length === 6 && (!this.state.book.includes(this.state.selectedBook) || this.state.selectedChapter !== this.state.chapter || this.state.selectedVerse !== this.state.verseNum)){
            this.setState({
                showRealVerse: true,
                currentStreak: 0,
                wrong: this.state.wrong + 1
            })
            alert("SORRY YOU DIDN'T GET IT");
        }
        var book1 = this.state.book.split(" ");
        var book2;
        var book3;
        if(book1.length > 3){
            book2 = book1[2].replace(/(\r\n|\n|\r)/gm, "");
            book3 = book1[3].replace(/(\r\n|\n|\r)/gm, "");
        }else{
            book2 = book1[2].replace(/(\r\n|\n|\r)/gm, "");
        }
        var bookInd = -1;
        if(book3){
            bookInd = books.indexOf(book2 + " " +  book3);
            actualBook = book2 + " " +  book3
        }else{
            bookInd = books.indexOf(book2);
            actualBook = book2;
        }
        var selectedBookInd = books.indexOf(this.state.selectedBook);
        var bGuesses=[...this.state.bookGuesses]
        var cGuesses=[...this.state.chapterGuesses]
        var vGuesses=[...this.state.verseGuesses]

        var bGuessesVal=[...this.state.bookGuessesVal]
        var cGuessesVal=[...this.state.chapterGuessesVal]
        var vGuessesVal=[...this.state.verseGuessesVal]

        bGuesses.push(selectedBookInd-bookInd);
        cGuesses.push(this.state.selectedChapter-this.state.chapter);
        vGuesses.push(this.state.selectedVerse-this.state.verseNum);

        bGuessesVal.push(this.state.selectedBook);
        cGuessesVal.push(this.state.selectedChapter);
        vGuessesVal.push(this.state.selectedVerse);

        this.setState({
            bookDir:selectedBookInd-bookInd,
            chapterDir: this.state.selectedChapter-this.state.chapter,
            verseDir: this.state.selectedVerse-this.state.verseNum,
            bookGuesses: bGuesses,
            chapterGuesses: cGuesses,
            verseGuesses: vGuesses,
            bookGuessesVal: bGuessesVal,
            chapterGuessesVal: cGuessesVal,
            verseGuessesVal: vGuessesVal,
            actualBook: actualBook
        })
        console.log("test")
    }

    handleCheck(e){
        console.log("this handle change hit")
        var checked = e.target.checked;
        this.setState({
            newTestMode: !this.state.newTestMode
           })
        this.refresh(checked);
        // this.setState({
        //     newTestMode: !this.state.newTestMode
        // })
    }

    refresh(newTest){
        const words = this.state.fullBible.split(/([0-9]+[0-9]+[0-9]+:[0-9]+[0-9]+[0-9]+)/);
        var chaptersArray = [];
        for(var j = 3; j < words.length; j++){
            if(words[j].includes(":001")){
                chaptersArray.push(parseInt(words[j-2].split(":")[1]))
            }
        }
        console.log("verses array "+ chaptersArray)
        console.log("Length of bible " + words.length);
        var minNum = 0;
        if(newTest){
            minNum = 46291;
        }
        var ind = Math.floor(Math.random() * (words.length - minNum + 1) + minNum)
        if(ind % 2 !== 0){
            ind++;
        }
        var bookOfBibleInd;
        for(var i = ind; i>-1; i--){
            if(words[i] ===  "001:001"){
                bookOfBibleInd = i-1;
                break;
            }
        }
        let show = words[ind];
        var book = words[bookOfBibleInd];
        var finalBook  = book.substring(book.indexOf("Book"))
        console.log("Book of bible " + book.substring(book.indexOf("Book")));
        console.log("CHAPTER VERSE " + words[ind-1]);
        console.log("ACTUAL VERSE "+ show);
        this.setState({
            book: book.substring(book.indexOf("Book")),
            chapter: parseInt(words[ind-1].split(":")[0]),
            verseNum: parseInt(words[ind-1].split(":")[1]),
            verseText: show,
            verseIndex: ind,
            bookGuesses: [],
            chapterGuesses: [],
            verseGuesses: [],
            bookGuessesVal: [],
            chapterGuessesVal: [],
            verseGuessesVal: [],
            showRealVerse: false,
            correctAnswer: false
        })
    }

    dailyVerse(){
        this.setState({
            dailyVerse: !this.state.dailyVerse
        })
    }

    // GridItem({ classes }) {
    //     return (
    //       // From 0 to 600px wide (smart-phones), I take up 12 columns, or the whole device width!
    //       // From 600-690px wide (tablets), I take up 6 out of 12 columns, so 2 columns fit the screen.
    //       // From 960px wide and above, I take up 25% of the device (3/12), so 4 columns fit the screen.

    //     );
    //   }

    render(){
        var fixedBooks = books.map(opt => ({ label: opt, value: opt }));
        if(this.state.newTestMode){
            var fixedBooks = newTestamentBooks.map(opt => ({ label: opt, value: opt }));
        }
        var fixedChapters = this.state.varChapters.map(opt => ({ label: opt, value: opt }));
        var fixedVerses = this.state.varVerses.map(opt => ({ label: opt, value: opt }));
        const { varChapters } = this.state;

        let chaptersList = varChapters.map((item,i) => <li key={i}>Test</li>)
        // var bookOutput = varChapters.bookGuesses.map(item => <div> {item} </div>)
        return(
            <div className="full">
                {/* <Stack   direction="row"
                        divider={<Divider orientation="vertical" flexItem />}
                        spacing={2}>
                    {this.state.bookGuessesVal.map(item => <Paper className="book"> {item} </Paper>)}
                    {this.state.chapterGuessesVal.map(item => <Paper className="book"> {item} </Paper>)}
                    {this.state.verseGuessesVal.map(item => <Paper className = "book"> {item} </Paper>)}
                </Stack> */}
                {/* <div className="dropDownSameLine">
                <div>
                    {this.state.bookGuesses.map(item => <div> {item} </div>)}
                </div>
                <div>
                    {this.state.chapterGuesses.map(item => <div> {item} </div>)}
                </div>
                <div>
                    {this.state.verseGuesses.map(item => <div> {item} </div>)}
                </div>
                </div> */}
                {/* { this.state.bookDir < 0 &&
                <div>
                    SELECTED BOOK IS TOO LOW
                </div>
                }{ this.state.bookDir === 0 &&
                <div>
                    SELECTED BOOK IS EQUAL
                </div>
                }{ this.state.bookDir > 0 &&
                <div>
                    SELECTED BOOK IS TOO HIGH
                </div>
                }
                { this.state.chapterDir < 0 &&
                <div>
                    SELECTED CHAPTER IS TOO LOW
                </div>
                }{this.state.chapterDir === 0 &&
                <div>
                    SELECTED CHAPTER IS EQUAL
                </div>
                }{this.state.chapterDir > 0 &&
                <div>
                    SELECTED CHAPTER IS TOO HIGH
                </div>
                }
                {this.state.verseDir < 0 &&
                <div>
                    SELECTED VERSE IS TOO LOW
                </div>
                }{this.state.verseDir === 0 &&
                <div>
                     SELECTED VERSE IS EQUAL
                </div>
                }{this.state.verseDir > 0 &&
                <div>
                    SELECTED VERSE IS TOO HIGH
                </div>
                } */}
                <div className="nonGuesses"
                style={{
                    backgroundImage: 'url('+blankScroll+')',
                    backgroundSize: "100% 60%",
                    backgroundRepeat: "no-repeat"
                  }}>
                {this.state.showRealVerse &&
                <div className="realVerse">
                    Actual Verse: {this.state.book} &nbsp;
                    {this.state.chapter}:
                    {this.state.verseNum}
                </div>
                }
                <br></br>
                    <div className="verseText">
                        {this.state.verseText}
                    </div>
                <br></br>
                <br></br>
                <br></br>
                <div className="allDropDowns">
                <div className="dropDownSameLine">BOOK:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <NativeSelect className="booksDropdown"
                    options={fixedBooks}
                    onChange={opt => this.selectedBook(opt)}
                    autoWidth="true"
                    isSearchable={false}
                    />
                    </div>
                    <br></br>
                <div className="dropDownSameLine1">CHAPTER:
                <NativeSelect className="chapterDropdown"
                    options={fixedChapters}
                    onChange={opt => this.selectedChapter(opt)}
                    isSearchable={false}
                    />
                {/* <Dropdown className="booksDropdown"
                    options={this.state.varChapters}
                    onChange={opt => this.selectedChapter(opt)}
                    /> */}
                    </div>
                    <br></br>
                    <div className="dropDownSameLine2">VERSE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <NativeSelect className="chapterDropdown"
                    options={fixedVerses}
                    onChange={opt => this.selectedVerses(opt)}
                    isSearchable={false}
                />
                {/* <Dropdown className="booksDropdown"
                    options={this.state.varVerses}
                    onChange={opt => this.selectedVerses(opt)}
                    /> */}
                    </div>
                    <button disabled={this.state.correctAnswer} className="submit" onClick={opt => this.submit()}>Submit</button>
                    <label className="dailyVerse">
                        Daily Verse
                        <Switch onChange={opt => this.dailyVerse()}
                        checked={this.state.dailyVerse}/>
                    </label>
                    <div className="newTestament">
                        New testament <br></br>Mode
                        <input
                            id ="checkbox_id"
                            type="checkbox"
                            checked={this.state.newTestMode}
                            onClick={opt=>this.handleCheck(opt)}
                        />
                        
                    </div>
                    <RefreshIcon className="refresh" onClick={opt => this.refresh(this.state.newTestMode)}></RefreshIcon>
                </div>
                <div className="curStreak">
                    Current Streak: {this.state.currentStreak}
                </div>
                <div className ="right">
                    Correct: {this.state.right}
                </div>
                <div className = "wrong">
                    Wrong: {this.state.wrong}
                </div>
                </div>
                <br></br>
                <div className="guess">
                {/* <div className="guessDiv">
                    <Stack className="red"><Paper className="standardHeight">1:</Paper><hr className="fullLine"></hr><Paper className="standardHeight">2:</Paper><hr className="fullLine"></hr><Paper>3:</Paper><hr className="fullLine"></hr><Paper>4:</Paper><hr className="fullLine"></hr><Paper>5:</Paper><hr className="fullLine"></hr><Paper>6:</Paper><hr className="fullLine"></hr><Paper>7:</Paper></Stack>
                </div> */}
                <div className="guessDiv">
                    {this.state.guessesVal.map(item => <Stack><Paper className="standardHeight">&nbsp;{item}:</Paper><br></br></Stack>)}
                </div>
                <div className="guessDiv1">
                    {this.state.bookGuessesVal.map(item => <Stack><Paper className="standardHeight">{item}{books.indexOf(item)-books.indexOf(this.state.actualBook) > 0 && <RemoveIcon></RemoveIcon>} {books.indexOf(item)-books.indexOf(this.state.actualBook) < 0 && <AddIcon className="smaller"></AddIcon>} {books.indexOf(item)-books.indexOf(this.state.actualBook) === 0 &&<CheckIcon className="correct"></CheckIcon>}</Paper><br></br></Stack>)}
                </div>
                <div className="chapterDiv">
                
                    {this.state.chapterGuessesVal.map(item => <Stack><Paper className="standardHeight">Ch: {item}{item-parseInt(this.state.chapter) > 0 && <RemoveIcon></RemoveIcon>} {item-parseInt(this.state.chapter) < 0 && <AddIcon></AddIcon>} {item-parseInt(this.state.chapter) === 0 &&<CheckIcon className="correct"></CheckIcon>}</Paper><br></br></Stack>)}
                </div>
                <div className="verseDiv">
                    {this.state.verseGuessesVal.map(item => <Stack><Paper className="standardHeight">vv: {item} {item-parseInt(this.state.verseNum) > 0 && <RemoveIcon></RemoveIcon>} {item-parseInt(this.state.verseNum) < 0 && <AddIcon></AddIcon>} {item-parseInt(this.state.verseNum) === 0 &&<CheckIcon className="correct"></CheckIcon>}</Paper> <br></br></Stack>)}
                </div>
                </div>
                {/* <Dropdown options={books} value={"PLEASE SELECT A BOOK"} placeholder="Select an option" /> */}
            </div>
        )
    }
}
export default Main