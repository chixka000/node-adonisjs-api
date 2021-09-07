import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Employee from 'App/Models/Employee'

export default class EmployeeSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Employee.createMany([{
      "first_name": "Lindsey",
      "last_name": "Geibel",
      "birthdate": "2014-11-15",
      "gender": "Male",
      "marital_status": "Married",
      "department": "Human Resources",
      "position": "Graphic Designer",
      "date_hired": "2021-03-11",
      "employment_status": "Casual",
      "contact_number": 8497424505,
      "email": "lseabrooke0@reference.com",
      "address": "7172 Sunbrook Trail",
      "city": "Cipari",
      "province": "Cebu",
      "nationality": "Delaware"
    }, {
      "first_name": "Thatcher",
      "last_name": "Egleton",
      "birthdate": "2014-05-20",
      "gender": "Female",
      "marital_status": "Single",
      "department": "Support",
      "position": "Executive Secretary",
      "date_hired": "2021-07-23",
      "employment_status": "Regular",
      "contact_number": 1567376405,
      "email": "thatfull1@uiuc.edu",
      "address": "8100 Holmberg Street",
      "city": "Créteil",
      "province": "Île-de-France",
      "nationality": "Argentinian"
    }, {
      "first_name": "Catlee",
      "last_name": "Everex",
      "birthdate": "2004-04-14",
      "gender": "Female",
      "marital_status": "Married",
      "department": "Engineering",
      "position": "Programmer II",
      "date_hired": "2021-07-19",
      "employment_status": "Casual",
      "contact_number": 3563708234,
      "email": "cforseith2@msn.com",
      "address": "3 Golf Place",
      "city": "Bokor",
      "province": "Cebu",
      "nationality": "Navajo"
    }, {
      "first_name": "Zeb",
      "last_name": "Lambell",
      "birthdate": "2002-04-19",
      "gender": "Male",
      "marital_status": "Married",
      "department": "Legal",
      "position": "Food Chemist",
      "date_hired": "2021-02-25",
      "employment_status": "Regular",
      "contact_number": 8477351561,
      "email": "zjansson3@dedecms.com",
      "address": "3697 Starling Junction",
      "city": "San Ignacio",
      "province": "Cebu",
      "nationality": "Guamanian"
    }, {
      "first_name": "Stefan",
      "last_name": "Lowne",
      "birthdate": "2012-11-30",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Training",
      "position": "Software Engineer II",
      "date_hired": "2020-09-16",
      "employment_status": "Regular",
      "contact_number": 8431812950,
      "email": "sforder4@themeforest.net",
      "address": "5606 Tennyson Circle",
      "city": "Boudinar",
      "province": "Bataan",
      "nationality": "Alaska Native"
    }, {
      "first_name": "Zackariah",
      "last_name": "Copnell",
      "birthdate": "2004-03-16",
      "gender": "Female",
      "marital_status": "Single",
      "department": "Legal",
      "position": "Analyst Programmer",
      "date_hired": "2021-01-31",
      "employment_status": "Regular",
      "contact_number": 9679305774,
      "email": "zfavel5@uol.com.br",
      "address": "8955 Gerald Center",
      "city": "Longyuanba",
      "province": "Bulacan",
      "nationality": "Asian"
    }, {
      "first_name": "Lindi",
      "last_name": "Calladine",
      "birthdate": "1995-01-15",
      "gender": "Female",
      "marital_status": "Married",
      "department": "Support",
      "position": "VP Marketing",
      "date_hired": "2020-11-22",
      "employment_status": "Regular",
      "contact_number": 1372001799,
      "email": "lsutherley6@mtv.com",
      "address": "395 Paget Pass",
      "city": "Daban",
      "province": "Batanes",
      "nationality": "Iroquois"
    }, {
      "first_name": "Onfroi",
      "last_name": "Boick",
      "birthdate": "2009-11-15",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Support",
      "position": "Sales Representative",
      "date_hired": "2021-01-09",
      "employment_status": "Single",
      "contact_number": 7035522768,
      "email": "osamways7@marketwatch.com",
      "address": "141 Chive Way",
      "city": "Mache",
      "province": "Cagayan",
      "nationality": "Sri Lankan"
    }, {
      "first_name": "Justina",
      "last_name": "Angood",
      "birthdate": "1993-04-18",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Support",
      "position": "Environmental Specialist",
      "date_hired": "2021-03-10",
      "employment_status": "Regular",
      "contact_number": 2186845429,
      "email": "jriatt8@fotki.com",
      "address": "9 Banding Point",
      "city": "Uryupinsk",
      "province": "Isabela",
      "nationality": "Shoshone"
    }, {
      "first_name": "Patrizio",
      "last_name": "Cammomile",
      "birthdate": "2003-03-12",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Business Development",
      "position": "Compensation Analyst",
      "date_hired": "2021-05-24",
      "employment_status": "Regular",
      "contact_number": 8465611855,
      "email": "pwilkins9@xrea.com",
      "address": "5346 Anthes Pass",
      "city": "Września",
      "province": "Cagayan",
      "nationality": "Yuman"
    }, {
      "first_name": "Prentiss",
      "last_name": "Hurndall",
      "birthdate": "2018-04-27",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Services",
      "position": "Assistant Media Planner",
      "date_hired": "2020-09-22",
      "employment_status": "Regular",
      "contact_number": 225991869,
      "email": "pdeasona@addtoany.com",
      "address": "00 Esker Terrace",
      "city": "Fécamp",
      "province": "Haute-Normandie",
      "nationality": "Argentinian"
    }, {
      "first_name": "Hetty",
      "last_name": "Fransoni",
      "birthdate": "1999-02-18",
      "gender": "Female",
      "marital_status": "Single",
      "department": "Research and Development",
      "position": "Financial Analyst",
      "date_hired": "2021-07-02",
      "employment_status": "Regular",
      "contact_number": 2964581785,
      "email": "hpesselb@bigcartel.com",
      "address": "4744 Westport Parkway",
      "city": "Albert Town",
      "province": "Cebu",
      "nationality": "Eskimo"
    }, {
      "first_name": "Stacia",
      "last_name": "Woodrow",
      "birthdate": "2005-09-19",
      "gender": "Female",
      "marital_status": "Single",
      "department": "Training",
      "position": "Technical Writer",
      "date_hired": "2021-06-03",
      "employment_status": "Regular",
      "contact_number": 1137011655,
      "email": "slicaric@people.com.cn",
      "address": "6923 Manitowish Way",
      "city": "Zagazig",
      "province": "Cebu",
      "nationality": "Iroquois"
    }, {
      "first_name": "Daron",
      "last_name": "Hurn",
      "birthdate": "2002-01-13",
      "gender": "Female",
      "marital_status": "Single",
      "department": "Research and Development",
      "position": "Office Assistant I",
      "date_hired": "2020-09-22",
      "employment_status": "Regular",
      "contact_number": 5792907921,
      "email": "dhaird@businessinsider.com",
      "address": "127 Schiller Pass",
      "city": "Micheng",
      "province": "Cebu",
      "nationality": "Alaska Native"
    }, {
      "first_name": "Chantal",
      "last_name": "Seif",
      "birthdate": "2000-12-09",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Training",
      "position": "Associate Professor",
      "date_hired": "2021-02-25",
      "employment_status": "Regular",
      "contact_number": 5099665168,
      "email": "chogbene@flavors.me",
      "address": "23644 Pepper Wood Place",
      "city": "Capissayan Sur",
      "province": "Cebu",
      "nationality": "Lumbee"
    }, {
      "first_name": "Dollie",
      "last_name": "Agirre",
      "birthdate": "2017-11-06",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Business Development",
      "position": "Biostatistician I",
      "date_hired": "2021-06-07",
      "employment_status": "Regular",
      "contact_number": 1662227403,
      "email": "dlevingef@va.gov",
      "address": "2114 Pond Road",
      "city": "Airuk",
      "province": "Cebu",
      "nationality": "Osage"
    }, {
      "first_name": "Elke",
      "last_name": "Wootton",
      "birthdate": "2019-01-19",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Marketing",
      "position": "Analog Circuit Design manager",
      "date_hired": "2021-02-16",
      "employment_status": "Regular",
      "contact_number": 5091636027,
      "email": "emahong@imgur.com",
      "address": "271 Jackson Road",
      "city": "Taozhuang",
      "province": "Cebu",
      "nationality": "Guamanian"
    }, {
      "first_name": "Susannah",
      "last_name": "Dartnall",
      "birthdate": "2019-07-21",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Business Development",
      "position": "Executive Secretary",
      "date_hired": "2021-06-08",
      "employment_status": "Regular",
      "contact_number": 9526584013,
      "email": "sdeathridgeh@chron.com",
      "address": "482 Linden Crossing",
      "city": "Langchi",
      "province": "Cebu",
      "nationality": "Colville"
    }, {
      "first_name": "Daile",
      "last_name": "Lawty",
      "birthdate": "2008-10-03",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Marketing",
      "position": "Payment Adjustment Coordinator",
      "date_hired": "2021-05-16",
      "employment_status": "Casual",
      "contact_number": 2324470214,
      "email": "dcoldricki@google.ru",
      "address": "81 School Center",
      "city": "Jilili",
      "province": "Cebu",
      "nationality": "Spaniard"
    }, {
      "first_name": "Carlynn",
      "last_name": "O'Sirin",
      "birthdate": "2001-04-02",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Training",
      "position": "VP Accounting",
      "date_hired": "2021-04-25",
      "employment_status": "Casual",
      "contact_number": 2582064242,
      "email": "cfilonierej@cnet.com",
      "address": "59463 Manley Crossing",
      "city": "Qal‘ah-ye Fārsī",
      "province": "Cebu",
      "nationality": "Uruguayan"
    }, {
      "first_name": "Lilyan",
      "last_name": "Hannon",
      "birthdate": "2017-02-01",
      "gender": "Female",
      "marital_status": "Single",
      "department": "Research and Development",
      "position": "Junior Executive",
      "date_hired": "2021-01-06",
      "employment_status": "Casual",
      "contact_number": 1531656352,
      "email": "lgreschk@census.gov",
      "address": "8 Lunder Circle",
      "city": "Wangmeng",
      "province": "Cebu",
      "nationality": "Delaware"
    }, {
      "first_name": "Robbie",
      "last_name": "Dun",
      "birthdate": "2009-07-14",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Product Management",
      "position": "Nuclear Power Engineer",
      "date_hired": "2021-09-01",
      "employment_status": "Single",
      "contact_number": 8961719343,
      "email": "rquesnel@oracle.com",
      "address": "25690 Texas Street",
      "city": "Jiangcun",
      "province": "Cebu",
      "nationality": "Fijian"
    }, {
      "first_name": "Gilligan",
      "last_name": "Skace",
      "birthdate": "2019-02-22",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Training",
      "position": "Design Engineer",
      "date_hired": "2021-04-13",
      "employment_status": "Casual",
      "contact_number": 4895484007,
      "email": "ghumburtonm@odnoklassniki.ru",
      "address": "7 Green Pass",
      "city": "Quimperlé",
      "province": "Bretagne",
      "nationality": "Alaska Native"
    }, {
      "first_name": "Cheryl",
      "last_name": "Stebbin",
      "birthdate": "2011-07-22",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Business Development",
      "position": "VP Sales",
      "date_hired": "2020-12-02",
      "employment_status": "Casual",
      "contact_number": 6107292143,
      "email": "cstennettn@shop-pro.jp",
      "address": "1 Walton Park",
      "city": "Allentown",
      "province": "Pennsylvania",
      "nationality": "Micronesian"
    }, {
      "first_name": "Olivier",
      "last_name": "Crown",
      "birthdate": "1993-03-18",
      "gender": "Female",
      "marital_status": "Single",
      "department": "Research and Development",
      "position": "Research Associate",
      "date_hired": "2021-05-27",
      "employment_status": "Casual",
      "contact_number": 8971654856,
      "email": "odommerqueo@g.co",
      "address": "175 Clarendon Drive",
      "city": "Arnage",
      "province": "Pays de la Loire",
      "nationality": "South American"
    }, {
      "first_name": "Mira",
      "last_name": "Considine",
      "birthdate": "2019-08-04",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Training",
      "position": "Structural Engineer",
      "date_hired": "2021-03-11",
      "employment_status": "Casual",
      "contact_number": 3165185729,
      "email": "maronsp@virginia.edu",
      "address": "9454 Atwood Junction",
      "city": "Kallithéa",
      "province": "Cebu",
      "nationality": "Puget Sound Salish"
    }, {
      "first_name": "Roseann",
      "last_name": "Tuckwell",
      "birthdate": "2019-12-07",
      "gender": "Female",
      "marital_status": "Single",
      "department": "Research and Development",
      "position": "Programmer Analyst II",
      "date_hired": "2020-12-09",
      "employment_status": "Casual",
      "contact_number": 4825531067,
      "email": "rbirrelq@indiatimes.com",
      "address": "43752 Warner Avenue",
      "city": "Saint-Rémi",
      "province": "Québec",
      "nationality": "Peruvian"
    }, {
      "first_name": "Bruno",
      "last_name": "Alliberton",
      "birthdate": "2004-12-06",
      "gender": "Female",
      "marital_status": "Married",
      "department": "Training",
      "position": "Environmental Tech",
      "date_hired": "2020-09-23",
      "employment_status": "Regular",
      "contact_number": 9051274331,
      "email": "bgalifordr@acquirethisname.com",
      "address": "5 Oneill Junction",
      "city": "Heshan",
      "province": "Cebu",
      "nationality": "American Indian and Alaska Native (AIAN)"
    }, {
      "first_name": "Briny",
      "last_name": "Voice",
      "birthdate": "2019-01-03",
      "gender": "Male",
      "marital_status": "Single",
      "department": "Training",
      "position": "Executive Secretary",
      "date_hired": "2020-12-12",
      "employment_status": "Regular",
      "contact_number": 4659780207,
      "email": "bwilliamss@angelfire.com",
      "address": "626 Cascade Trail",
      "city": "Kalinovskaya",
      "province": "Cebu",
      "nationality": "Thai"
    }, {
      "first_name": "Renaud",
      "last_name": "Korneichik",
      "birthdate": "1994-02-24",
      "gender": "Female",
      "marital_status": "Single",
      "department": "Marketing",
      "position": "Project Manager",
      "date_hired": "2021-05-28",
      "employment_status": "Regular",
      "contact_number": 4439458128,
      "email": "ratteridget@google.com.hk",
      "address": "8910 Washington Plaza",
      "city": "Torsås",
      "province": "Kalmar",
      "nationality": "Thai"
    }])
  }
}
