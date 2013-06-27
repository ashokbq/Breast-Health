// JScript File

servlet = "http://www.mobiletest.mednl.com/assessment.php";
_error_msg_history = "This tool cannot calculate breast cancer risk accurately for women with a medical history of any breast cancer or of DCIS or LCIS.";
_error_msg_current_age = "This tool only calculates risk for women 35 years of age or older.";
_error_msg_hist_age = "This tool cannot calculate breast cancer risk accurately for women with a medical history of breast cancer or of DCIS or LCIS. In addition, the tool only calculates risk for women 35 years of age or older.";
function checkAge() {
	
  if (document.risk.current_age.selectedIndex==1)
  {	  
    alert(_error_msg_current_age);
  }
  else
  {
	 if(document.risk.current_age.selectedIndex==0)
	 {
		 alert("You must select the age of the patient.");
	 }
	 else
	 {
 window.location = 'riskcalc.html#riskcalc3'	 		 
//	alert('next question');  
	 }
  }
}
function checkHistory(val) {
	
//	alert(val);
 if (val==1){
   alert(_error_msg_history);
 }
 else
 {
	  history_val=val;
  window.location = 'riskcalc.html#riskcalc2'	  
//	 alert('go to next question');
 }
   
}

function getage_at_menarche(val1)
{
age_at_menarche=val1;
 window.location = 'riskcalc.html#riskcalc4'	
//alert(age_at_menarche);
//alert("go to next ques");	
}

function getage_at_first_live_birth(val2)
{
	//alert(val2);
	 age_at_first_live_birth=val2;
 window.location = 'riskcalc.html#riskcalc5'	 
//	alert('go to next question');
}

function getrelated_with_breast_cancer(val3)
{
	related_with_breast_cancer=val3;
	window.location = 'riskcalc.html#riskcalc6'
//	alert('go to next page');
	
}

function checkBiopsy(val4)
{
ever_had_biopsy=val4;
if(val4=='99')
{
	
document.getElementById('previous_biopsies1').style.display='block';
document.getElementById('previous_biopsies2').style.display='none';
document.getElementById('previous_biopsies3').style.display='none';
document.getElementById('biopsy_with_hyperplasia1').style.display='block';
document.getElementById('biopsy_with_hyperplasia2').style.display='none';
document.getElementById('biopsy_with_hyperplasia3').style.display='none';
document.getElementById('biopsy_with_hyperplasia4').style.display='none';
previous_biopsies='99';
biopsy_with_hyperplasia='99';
}

if(val4=='0')
{
document.getElementById('previous_biopsies1').style.display='block';
document.getElementById('previous_biopsies2').style.display='none';
document.getElementById('previous_biopsies3').style.display='none';
document.getElementById('biopsy_with_hyperplasia1').style.display='block';
document.getElementById('biopsy_with_hyperplasia2').style.display='none';
document.getElementById('biopsy_with_hyperplasia3').style.display='none';
document.getElementById('biopsy_with_hyperplasia4').style.display='none';
previous_biopsies='0';
biopsy_with_hyperplasia='0';


}

if(val4=='1')
{
document.getElementById('previous_biopsies1').style.display='none';
document.getElementById('previous_biopsies2').style.display='block';
document.getElementById('previous_biopsies3').style.display='block';
document.getElementById('biopsy_with_hyperplasia1').style.display='none';
document.getElementById('biopsy_with_hyperplasia2').style.display='block';
document.getElementById('biopsy_with_hyperplasia3').style.display='block';
document.getElementById('biopsy_with_hyperplasia4').style.display='block';
}




}

function previous_biopsies(val5)
{
		
previous_biopsies=val5;	
}

function biopsy_with_hyperplasia(val6)
{
biopsy_with_hyperplasia=val6;	

alert("swipe");
}



function checkEthnicity() {
    if (document.risk.race.selectedIndex == 2) {
        //alert("Assessments for African American women may underestimate the chance of breast cancer and are subject to greater uncertainty than those for white women. Researchers are conducting additional studies, including studies with minority populations, to gather more data and to increase the accuracy of the tool for women in these populations."); 
        //dec282007 SRamaiah: this has been removed as the new model(CARE) is now in use for african american women
    }
    else if (document.risk.race.selectedIndex == 3)
    { alert("Assessments for Hispanic women are subject to greater uncertainty than those for white and African American women. Researchers are conducting additional studies, including studies with minority populations, to gather more data and to increase the accuracy of the tool for women in these populations."); }
    //else if (document.risk.race.selectedIndex == 4) {    
    //{ alert("Assessments for Asian or Pacific Islander women are uncertain and are based on data for white women. Researchers are conducting additional studies, including studies with minority populations, to gather more data and to increase the accuracy of the tool for women in these populations."); }    
    else if (document.risk.race.selectedIndex == 5)
    { alert("Assessments for American Indian or Alaskan Native women are uncertain and are based on data for white women. Researchers are conducting additional studies, including studies with minority populations, to gather more data and to increase the accuracy of the tool for women in these populations."); }
    else if (document.risk.race.selectedIndex == 6)
    { alert("This risk assessment was based on data for white females."); }
  //reset it to white female
    //document.risk.race.selectedIndex=1;

    //Populate sub race/ehnicity
    if (document.risk.race.selectedIndex != 4) {
        document.risk.subrace.options.length = 0;
        document.risk.subrace.options[0] = new Option("n/a");
        document.risk.subrace.selectedIndex = 0;
        document.risk.subrace.options[0].value = 99;
        }
    else{
        document.risk.subrace.options[0] = new Option("(select) ");
        document.risk.subrace.options[0].value = 999;
        document.risk.subrace.options[1] = new Option("Chinese");
        document.risk.subrace.options[1].value = 7;
        document.risk.subrace.options[2] = new Option("Japanese");
        document.risk.subrace.options[2].value = 8;
        document.risk.subrace.options[3] = new Option("Filipino");
        document.risk.subrace.options[3].value = 9;
        document.risk.subrace.options[4] = new Option("Hawaiian");
        document.risk.subrace.options[4].value = 10;
        document.risk.subrace.options[5] = new Option("Other Pacific Islander");
        document.risk.subrace.options[5].value = 11;
        document.risk.subrace.options[6] = new Option("Other Asian-American");
        document.risk.subrace.options[6].value = 12;        
        document.risk.subrace.selectedIndex = 0;
        }
    }

/*function checkBiopsy(val4) {
	
	
	
  if (document.risk.ever_had_biopsy.selectedIndex==1) { // Unknown
    document.risk.previous_biopsies.options.length = 0;
    document.risk.previous_biopsies.options[0] = new Option("n/a");
    document.risk.previous_biopsies.selectedIndex = 0;
    document.risk.previous_biopsies.options[0].value = 99;
    document.risk.biopsy_with_hyperplasia.options.length = 0;
    document.risk.biopsy_with_hyperplasia.options[0] = new Option("n/a");
    document.risk.biopsy_with_hyperplasia.selectedIndex = 0;
    document.risk.biopsy_with_hyperplasia.options[0].value = 99;
  }
  
  
  if (document.risk.ever_had_biopsy.selectedIndex==2) { // No
    document.risk.previous_biopsies.options.length = 0;
    document.risk.previous_biopsies.options[0] = new Option("n/a");
    document.risk.previous_biopsies.selectedIndex = 0;
    document.risk.previous_biopsies.options[0].value = 0;
    document.risk.biopsy_with_hyperplasia.options.length = 0;
    document.risk.biopsy_with_hyperplasia.options[0] = new Option("n/a");
    document.risk.biopsy_with_hyperplasia.selectedIndex = 0;
    document.risk.biopsy_with_hyperplasia.options[0].value = 0;
  }
  if (document.risk.ever_had_biopsy.selectedIndex==3) { // Yes
    document.risk.previous_biopsies.options[0] = new Option("(select) ");
    document.risk.previous_biopsies.options[0].value = 999;
    document.risk.previous_biopsies.options[1] = new Option("1");
    document.risk.previous_biopsies.options[1].value = 1;
    document.risk.previous_biopsies.options[2] = new Option("> 1");
    document.risk.previous_biopsies.options[2].value = 2;
    document.risk.previous_biopsies.selectedIndex = 0;
    document.risk.biopsy_with_hyperplasia.options[0] = new Option("(select) ");
    document.risk.biopsy_with_hyperplasia.options[0].value = 999;
    document.risk.biopsy_with_hyperplasia.options[1] = new Option("Unknown");
    document.risk.biopsy_with_hyperplasia.options[1].value = 99;
    document.risk.biopsy_with_hyperplasia.options[2] = new Option("No");
    document.risk.biopsy_with_hyperplasia.options[2].value = 0;
    document.risk.biopsy_with_hyperplasia.options[3] = new Option("Yes");
    document.risk.biopsy_with_hyperplasia.options[3].value = 1;
    document.risk.biopsy_with_hyperplasia.selectedIndex = 0;
//    document.reload();
  }
}*/
function calculate() {
alert('hi');

  current_age = document.risk.current_age.options[document.risk.current_age.selectedIndex].value;
  alert(current_age);
//  age_at_menarche = age_at_menarche;
  alert("age_at_menarche"+age_at_menarche);
  age_at_first_live_birth = age_at_first_live_birth;
  alert(age_at_first_live_birth);
  ever_had_biopsy = ever_had_biopsy;
  alert(ever_had_biopsy);
  previous_biopsies = previous_biopsies;
 alert(previous_biopsies);
  biopsy_with_hyperplasia = biopsy_with_hyperplasia;
  alert( biopsy_with_hyperplasia);
  related_with_breast_cancer = related_with_breast_cancer;
 // alert(related_with_breast_cancer);
  if (document.risk.race.selectedIndex == 4) {
      race = document.risk.subrace.options[document.risk.subrace.selectedIndex].value;
  }
  else {
      race = document.risk.race.options[document.risk.race.selectedIndex].value;

  }
  alert(race);

  if (document.risk.race.selectedIndex==4)
    asian = "&asian=" + escape("It has been observed that recent immigrants from rural Asia may have a lower risk of breast cancer than calculated.");
  else
    asian = "";
alert(asian);
  if (previous_biopsies=="")
    previous_biopsies = "99";
	alert(previous_biopsies);
  if (biopsy_with_hyperplasia=="")
    biopsy_with_hyperplasia = "99";
alert(biopsy_with_hyperplasia);
  parameters = "current_age=" + current_age +
         "&age_at_menarche=" + age_at_menarche +
         "&age_at_first_live_birth=" + age_at_first_live_birth +
         "&ever_had_biopsy=" + ever_had_biopsy +
         "&previous_biopsies=" + previous_biopsies +
         "&biopsy_with_hyperplasia=" + biopsy_with_hyperplasia +
         "&related_with_breast_cancer=" + related_with_breast_cancer +
         "&race=" + race +
           asian;
		   alert(parameters);

  // Web Analytics (Omniture) - call web analytics-related function defined in 
  // in analytics_include.html and rendered in the web analytics page-load tag.  
  // If web analytics are turned off,  analytics_include.html is empty and this function is not found.
  // In the future it may be more efficient to attach this JavaScript code 
  // to the appropriate page event (click or submit) so no reference to web analytics
  // will be needed in this file.  
  if(window.Analytics_CalculateRiskConversionEvent)
    window.Analytics_CalculateRiskConversionEvent();
alert(document.location);
  document.location = servlet + "?" + parameters;
  return;

  
  if (document.risk.race.selectedIndex==0) {
    alert("You must indicate the patient's race.");
    return;
  }
}
function disclaimer() {
  if (document.risk.race.selectedIndex==0||document.risk.race.selectedIndex==1) {
    document.risk.dText.value = "";
  }
  else if (document.risk.race.selectedIndex==2) {
    document.risk.dText.value = "The projections for African American women may slightly underestimate the likelihood of breast cancer and are subject to greater uncertainty than those for white women.";
  }
  else if (document.risk.race.selectedIndex==3) {
    document.risk.dText.value = "The projections for Hispanic women are subject to greater uncertainty than those for white women.";
  }
  else if (document.risk.race.selectedIndex==4) {
    document.risk.dText.value = "Calculations for Asian or Pacific Islander women are based on the rates for white women and are uncertain.";
  }
  else if (document.risk.race.selectedIndex==5) {
    document.risk.dText.value = "Calculations for American Indian or Alaskan Native women are based on the rates for white women and are uncertain.";
  }
  else if (document.risk.race.selectedIndex==6) {
    document.risk.dText.value = "If the patient's race is unknown, the program will use data for white females to estimate the predicted risk.";
  }
}

function popUp(URL) {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=1,menubar=0,resizable=1,width=497,height=262,left = 391.5,top = 381');");
}
