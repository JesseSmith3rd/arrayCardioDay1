const inventors = [{ {lastname:'Smith', firstname:'Jesse',year: 1978, passed: 2090},
                     {lastname:'Smith', firstname:'Roshonda',year: 1977, passed: 2098},
                     {lastname:'Smith',firstname:'Laila', year: 2005, passed: 2123},
                     {lastname:'Smith', firstname:'Levinsky',year: 1981, passed: 2090},
                     {lastname:'Hibler', firstname: 'Zeke',year: 1974, passed: 2092},
                     {lastname:'Fulcher',firstname:'Trovona',year: 1974, passed: 2088},
                     {lastname:'Fulcher',firstname:'John',year: 1977, passed: 2087},
                     {lastname:'Fulcher', firstname:'LilJohn',year: 1998, passed: 2199},
                     {lastname:'Fulcher',firstname:'Sierrah'year: 1997, passed: 2199},
                     {lastname:'Fulcher', firstname:'Shakirah',year: 1999, passed: 2199},
                     {lastname:'Smith', firstname:'Jessica',year: 1977, passed: 2090},
                     {lastname:'Smith',firstname:'Betty'year: 1954, passed: 2070},
                     {lastname:'Smith Jr.',firstname:'Jesse',year: 1952, passed: 2070},
                     {lastname:'Williams',firstname: 'Shinita',year: 1978, passed: 2090},
                     {lastname:'Gardner',firstname: 'Contheria',year: 1980, passed: 2090},
                     {lastname:'Williams', firstname:'Felicity',year: 2003, passed: 2199},
                     {lastname:'Fisher',firstname:'Levi',year: 1960, passed: 2070},
                     {lastname:'Smith',firstname:'Zion',year: 2004, passed: 2199},
                     {lastname:'Smith',firstname:'Xavier',year: 2007, passed: 2199},
                     {lastname:'Smith',firstname:'Tyrese',year: 2010 passed: 2299},
                     {lastname:'Smith',firstname:'Miah',year: 2006, passed: 2199},
                     {lastname:'Williams',firstname:'Rosemary',year: 1950, passed: 2070},
                     {lastname:'Fisher',firstname:'Shirley',year: 1962, passed: 2071},
                     {lastname:'Fisher',firstname:'Lisa',year: 1965, passed: 2072},
                     {lastname:'Fisher',firstname:'May',year: 1961, passed: 2070},
                     {lastname:'Grelich',firstname:'Katherine',year: 1951, passed: 2070},
                     {lastname:'Goodman',firstname:'Jacob',year: 1990, passed: 2090},
                     {lastname:'Carfish',firstname:'June',year: 1992, passed: 2090},
                     {lastname:'Windum',firstname:'Maker',year: 1990, passed: 2090},
                     {lastname:'Susu',firstname:'Bing',year: 1990, passed: 2090},
                     {lastname:'Frees',firstname:'Jona',year: 1990, passed: 2090},
                     {lastname:'Winn',firstname:'Allaway',year: 1990, passed: 2090},
                     {lastname:'Piper',firstname:'Paytha',year: 1990, passed: 2090},
                     {lastname:'Bingham',firstname:'Singem',year: 1990, passed: 2090},
                     {lastname:'Whonew',firstname:'Song',year: 1990, passed: 2090},
                     {lastname:'Dono',firstname:'Brono',year: 1990, passed: 2090}];

const people = [  'Smith, Jesse', 'Smith, Roshonda', 'Smith, Laila','Smith, Levinsky', 'Hibler, Zeke',
                  'Fulcher, Trovona','Fulcher, John','Fulcher, LilJohn','Fulcher, Sierrah','Fulcher, Shakirah',
                  'Smith, Jessica','Smith, Betty','Smith Jr., Jesse','Williams, Shinita','Williams, Felicity',
                  'Fisher, Levi','Smith, Zion','Smith, Xavier','Smith, Tyrese','Smith, Miah',
                  'Williams, Rosemary','Fisher, Shirley','Fisher, Lisa','Fisher, May','Grelich, Katherine',
                  'Goodman, Jacob','Carfish, June','Windum, Maker','Susu, Bing','Frees, Jona',
                  'Winn, Allaway','Piper, Paytha','Bingham, Singem','Whonew, Song','Dono, Brono'];

//Array.prototype.filter();
//1. Filter the list of inventors and business owners who were born in the 1500's
const fifteen = inventors.filter(function(inventor){
  if(inventor.year >= 1950 && inventor.year < 1960) {
    return true; //by returning true that means we keep it
  }
});
console.log(fifteen);
