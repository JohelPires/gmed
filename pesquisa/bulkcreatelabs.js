// const lista = require('./listacmed.js')
// const fs = require('fs')
const Laboratorio = require('../src/database/models/laboratorio')

const laboratorios = [
    {
        cnpj: '56.998.982/0001-07',
        nome: 'BRISTOL-MYERS SQUIBB FARMACEUTICA LTDA',
    },
    {
        cnpj: '00.923.140/0001-31',
        nome: 'EMS SIGMA PHARMA LTDA',
    },
    {
        cnpj: '18.459.628/0001-15',
        nome: 'BAYER S.A.',
    },
    {
        cnpj: '61.190.096/0001-92',
        nome: 'EUROFARMA LABORATORIOS S.A.',
    },
    {
        cnpj: '02.814.497/0001-07',
        nome: 'CIMED INDUSTRIA DE MEDICAMENTOS LTDA',
    },
    {
        cnpj: '03.485.572/0001-04',
        nome: 'GEOLAB INDUSTRIA FARMACEUTICA S/A',
    },
    {
        cnpj: '05.044.984/0001-26',
        nome: 'LEGRAND PHARMA INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '09.545.589/0001-88',
        nome: 'MABRA FARMACEUTICA LTDA.',
    },
    {
        cnpj: '10.588.595/0007-97',
        nome: 'MEDLEY FARMACEUTICA LTDA',
    },
    {
        cnpj: '17.115.437/0001-73',
        nome: 'LABORATORIO GLOBO LTDA',
    },
    {
        cnpj: '17.159.229/0001-76',
        nome: 'LABORATORIO TEUTO BRASILEIRO S/A',
    },
    {
        cnpj: '29.785.870/0001-03',
        nome: 'LABORATORIO NEO QUIMICA COMERCIO E INDUSTRIA LTDA',
    },
    {
        cnpj: '45.992.062/0001-65',
        nome: 'GERMED FARMACEUTICA LTDA',
    },
    {
        cnpj: '53.162.095/0001-06',
        nome: 'BIOSINTETICA FARMACEUTICA LTDA',
    },
    {
        cnpj: '57.507.378/0001-01',
        nome: 'EMS S/A',
    },
    {
        cnpj: '60.659.463/0029-92',
        nome: 'ACHE LABORATORIOS FARMACEUTICOS S.A',
    },
    {
        cnpj: '60.665.981/0001-18',
        nome: 'UNIAO QUIMICA FARMACEUTICA NACIONAL S/A',
    },
    {
        cnpj: '72.593.791/0001-11',
        nome: 'NOVA QUIMICA FARMACEUTICA S/A',
    },
    {
        cnpj: '73.856.593/0001-66',
        nome: 'PRATI DONADUZZI & CIA LTDA',
    },
    {
        cnpj: '83.874.628/0001-43',
        nome: 'LABORATORIO FARMACEUTICO ELOFAR LTDA',
    },
    {
        cnpj: '30.222.814/0001-31',
        nome: 'VITAMEDIC INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '73.663.650/0001-90',
        nome: 'RANBAXY FARMACEUTICA LTDA',
    },
    {
        cnpj: '92.265.552/0001-40',
        nome: 'MULTILAB INDUSTRIA E COMERCIO DE PRODUTOS FARMACEUTICOS LTDA',
    },
    {
        cnpj: '51.780.468/0001-87',
        nome: 'JANSSEN-CILAG FARMACEUTICA LTDA',
    },
    {
        cnpj: '02.685.377/0001-57',
        nome: 'SANOFI-AVENTIS FARMACEUTICA LTDA',
    },
    {
        cnpj: '45.987.013/0001-34',
        nome: 'MERCK SHARP & DOHME FARMACEUTICA  LTDA',
    },
    {
        cnpj: '33.069.212/0001-84',
        nome: 'MERCK S/A',
    },
    {
        cnpj: '61.282.661/0001-41',
        nome: 'LABORATORIO QUIMICO FARMACEUTICO BERGAMO LTDA',
    },
    {
        cnpj: '62.462.015/0001-29',
        nome: 'APSEN FARMACEUTICA S/A',
    },
    {
        cnpj: '74.232.034/0001-48',
        nome: 'LABORATORIOS FERRING LTDA',
    },
    {
        cnpj: '05.035.244/0001-23',
        nome: 'SUN FARMACEUTICA DO BRASIL LTDA',
    },
    {
        cnpj: '18.324.343/0001-77',
        nome: 'BELFAR LTDA',
    },
    {
        cnpj: '33.408.105/0001-33',
        nome: 'GREENPHARMA QUIMICA E FARMACEUTICA LTDA',
    },
    {
        cnpj: '61.286.647/0001-16',
        nome: 'SANDOZ DO BRASIL INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '92.695.691/0001-03',
        nome: 'KLEY HERTZ FARMACEUTICA S.A',
    },
    {
        cnpj: '19.791.813/0001-75',
        nome: 'LABORATORIOS OSORIO DE MORAES LTDA',
    },
    {
        cnpj: '61.068.755/0001-12',
        nome: 'SANVAL COMERCIO E INDUSTRIA LTDA',
    },
    {
        cnpj: '56.994.502/0001-30',
        nome: 'NOVARTIS BIOCIENCIAS S.A',
    },
    {
        cnpj: '60.084.456/0001-09',
        nome: 'LATINOFARMA INDUSTRIAS FARMACEUTICAS LTDA',
    },
    {
        cnpj: '03.560.974/0001-18',
        nome: 'SCHERING-PLOUGH INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '05.333.542/0001-08',
        nome: 'TEVA FARMACEUTICA LTDA.',
    },
    {
        cnpj: '60.318.797/0001-00',
        nome: 'ASTRAZENECA DO BRASIL LTDA',
    },
    {
        cnpj: '61.517.397/0001-88',
        nome: 'THERASKIN FARMACEUTICA LTDA.',
    },
    {
        cnpj: '07.898.671/0001-60',
        nome: 'SHIRE FARMACEUTICA BRASIL LTDA.',
    },
    {
        cnpj: '07.718.721/0001-80',
        nome: 'BEAUFOUR IPSEN FARMACEUTICA LTDA',
    },
    {
        cnpj: '15.800.545/0001-50',
        nome: 'ABBVIE FARMACEUTICA LTDA.',
    },
    {
        cnpj: '55.980.684/0001-27',
        nome: 'ZODIAC PRODUTOS FARMACEUTICOS S/A',
    },
    {
        cnpj: '56.998.701/0001-16',
        nome: 'ABBOTT LABORATORIOS DO BRASIL LTDA',
    },
    {
        cnpj: '46.070.868/0001-69',
        nome: 'LABORATORIOS PFIZER LTDA.',
    },
    {
        cnpj: '61.230.314/0001-75',
        nome: 'LIBBS FARMACEUTICA LTDA',
    },
    {
        cnpj: '33.388.182/0001-79',
        nome: 'PRODUTOS FARMACEUTICOS MILLET ROUX',
    },
    {
        cnpj: '43.426.626/0001-77',
        nome: 'ALLERGAN PRODUTOS FARMACEUTICOS LTDA',
    },
    {
        cnpj: '44.010.437/0001-81',
        nome: 'CAZI QUIMICA FARMACEUTICA INDUSTRIA E COMERCIO LTDA',
    },
    {
        cnpj: '61.100.004/0001-36',
        nome: 'ZAMBON LABORATORIOS FARMACEUTICOS LTDA.',
    },
    {
        cnpj: '33.247.743/0001-10',
        nome: 'GLAXOSMITHKLINE BRASIL LTDA',
    },
    {
        cnpj: '48.396.378/0001-82',
        nome: 'UCI - FARMA INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '44.363.661/0001-57',
        nome: 'GLENMARK FARMACEUTICA LTDA',
    },
    {
        cnpj: '58.430.828/0001-60',
        nome: 'BLAU FARMACEUTICA S.A.',
    },
    {
        cnpj: '05.161.069/0001-10',
        nome: 'BRAINFARMA INDUSTRIA QUIMICA E FARMACEUTICA S.A',
    },
    {
        cnpj: '60.397.775/0001-74',
        nome: 'TAKEDA PHARMA LTDA.',
    },
    {
        cnpj: '02.433.631/0001-20',
        nome: 'ASPEN PHARMA INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '02.501.297/0001-02',
        nome: 'PHARLAB INDUSTRIA FARMACEUTICA S.A.',
    },
    {
        cnpj: '04.338.716/0001-54',
        nome: 'INDUSTRIA FARMACEUTICA MELCON DO BRASIL S.A.',
    },
    {
        cnpj: '48.113.906/0001-49',
        nome: 'ONEFARMA INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '17.562.075/0001-69',
        nome: 'CIFARMA CIENTIFICA FARMACEUTICA LTDA',
    },
    {
        cnpj: '61.299.111/0001-35',
        nome: 'LUPER INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '44.734.671/0001-51',
        nome: 'CRISTALIA PRODUTOS QUIMICOS FARMACEUTICOS LTDA.',
    },
    {
        cnpj: '47.100.862/0001-50',
        nome: 'LABORATIL FARMACEUTICA LTDA',
    },
    {
        cnpj: '33.009.945/0001-23',
        nome: 'PRODUTOS ROCHE QUIMICOS E FARMACEUTICOS S.A.',
    },
    {
        cnpj: '00.317.372/0001-46',
        nome: 'GALDERMA BRASIL LTDA',
    },
    {
        cnpj: '33.349.473/0001-58',
        nome: 'FARMOQUIMICA S/A',
    },
    {
        cnpj: '42.374.207/0001-76',
        nome: 'LABORATORIOS SERVIER DO BRASIL LTDA',
    },
    {
        cnpj: '46.385.514/0001-03',
        nome: 'ROYTON QUIMICA FARMACEUTICA LTDA',
    },
    {
        cnpj: '02.513.899/0001-71',
        nome: 'GRIFOLS BRASIL LTDA',
    },
    {
        cnpj: '02.552.927/0001-60',
        nome: 'OCTAPHARMA BRASIL LTDA',
    },
    {
        cnpj: '49.351.786/0001-80',
        nome: 'BAXTER HOSPITALAR LTDA',
    },
    {
        cnpj: '49.475.833/0001-06',
        nome: 'BIOLAB SANUS FARMACEUTICA LTDA',
    },
    {
        cnpj: '33.173.097/0001-93',
        nome: 'INSTITUTO TERAPEUTICO DELTA LTDA',
    },
    {
        cnpj: '61.072.393/0001-33',
        nome: 'WYETH INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '60.726.692/0001-81',
        nome: 'MARJAN INDUSTRIA E COMERCIO LTDA',
    },
    {
        cnpj: '68.132.950/0001-03',
        nome: 'GENZYME DO BRASIL LTDA',
    },
    {
        cnpj: '62.969.589/0001-98',
        nome: 'CSL BEHRING COMERCIO DE PRODUTOS FARMACEUTICOS LTDA',
    },
    {
        cnpj: '01.329.816/0001-26',
        nome: 'PANAMERICAN MEDICAL SUPPLY SUPRIMENTOS MEDICOS LTDA',
    },
    {
        cnpj: '18.774.815/0001-93',
        nome: 'AMGEN BIOTECNOLOGIA DO BRASIL LTDA.',
    },
    {
        cnpj: '07.986.222/0001-74',
        nome: 'BIOGEN BRASIL PRODUTOS FARMACEUTICOS LTDA',
    },
    {
        cnpj: '82.277.955/0001-55',
        nome: 'NOVO NORDISK FARMACEUTICA DO BRASIL LTDA',
    },
    {
        cnpj: '61.082.426/0002-07',
        nome: 'COSMED INDUSTRIA DE COSMETICOS E MEDICAMENTOS S.A.',
    },
    {
        cnpj: '04.748.181/0001-90',
        nome: 'LABORATORIOS BAGO DO BRASIL S.A.',
    },
    {
        cnpj: '33.078.528/0001-32',
        nome: 'TORRENT DO BRASIL LTDA',
    },
    {
        cnpj: '05.254.971/0001-81',
        nome: 'ZYDUS NIKKHO FARMACEUTICA LTDA',
    },
    {
        cnpj: '07.845.173/0001-50',
        nome: 'SCHERING-PLOUGH PRODUTOS FARMACEUTICOS LTDA',
    },
    {
        cnpj: '61.150.447/0001-31',
        nome: 'LABORATORIOS BALDACCI LTDA',
    },
    {
        cnpj: '19.570.720/0001-10',
        nome: 'HIPOLABOR FARMACEUTICA LTDA',
    },
    {
        cnpj: '01.571.702/0001-98',
        nome: 'HALEX ISTAR INDUSTRIA FARMACEUTICA SA',
    },
    {
        cnpj: '06.628.333/0001-46',
        nome: 'FARMACE INDUSTRIA QUIMICO-FARMACEUTICA CEARENSE LTDA',
    },
    {
        cnpj: '04.301.884/0001-75',
        nome: 'AUROBINDO PHARMA INDUSTRIA FARMACEUTICA LIMITADA',
    },
    {
        cnpj: '05.399.786/0001-85',
        nome: 'UNICHEM FARMACEUTICA DO BRASIL LTDA',
    },
    {
        cnpj: '14.806.008/0001-54',
        nome: 'MOMENTA FARMACEUTICA LTDA.',
    },
    {
        cnpj: '11.643.096/0001-22',
        nome: 'MYLAN LABORATORIOS LTDA',
    },
    {
        cnpj: '02.932.074/0001-91',
        nome: 'HYPERMARCAS S/A',
    },
    {
        cnpj: '94.869.054/0001-31',
        nome: 'LABORATORIOS LIBRA DO BRASIL LTDA',
    },
    {
        cnpj: '64.088.172/0001-41',
        nome: 'ATIVUS FARMACEUTICA LTDA',
    },
    {
        cnpj: '25.773.037/0001-83',
        nome: 'PHARMASCIENCE INDUSTRIA FARMACEUTICA EIRELI',
    },
    {
        cnpj: '64.171.697/0001-46',
        nome: 'ACCORD FARMACEUTICA LTDA',
    },
    {
        cnpj: '43.312.503/0001-05',
        nome: 'SUPERA FARMA LABORATORIOS S.A',
    },
    {
        cnpj: '68.949.239/0001-46',
        nome: 'UNITED MEDICAL LTDA',
    },
    {
        cnpj: '33.173.097/0002-74',
        nome: 'INSTITUTO TERAPEUTICO DELTA LTDA.',
    },
    {
        cnpj: '61.541.132/0001-15',
        nome: 'NEOLATINA COMERCIO E INDUSTRIA FARMACEUTICA S.A',
    },
    {
        cnpj: '05.439.635/0001-03',
        nome: 'ANTIBIOTICOS DO BRASIL LTDA',
    },
    {
        cnpj: '03.860.313/0001-08',
        nome: 'LABORIS FARMACEUTICA LTDA',
    },
    {
        cnpj: '17.875.154/0001-20',
        nome: 'MEDQUIMICA INDUSTRIA FARMACEUTICA LTDA.',
    },
    {
        cnpj: '48.344.725/0007-19',
        nome: 'ALTHAIA S.A INDUSTRIA FARMACEUTICA',
    },
    {
        cnpj: '33.258.401/0001-03',
        nome: 'INSTITUTO BIOCHIMICO INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '06.597.801/0001-62',
        nome: 'THEODORO F SOBRAL & CIA LTDA',
    },
    {
        cnpj: '33.060.740/0001-72',
        nome: 'MANTECORP INDUSTRIA QUIMICA E FARMACEUTICA S.A.',
    },
    {
        cnpj: '46.741.922/0001-50',
        nome: 'LABORATORIO SINTERAPICO INDUSTRIAL FARMACEUTICO LTDA',
    },
    {
        cnpj: '10.877.926/0001-13',
        nome: 'LABORATORIO FARMACEUTICO DO ESTADO DE PERNAMBUCO - LAFEPE',
    },
    {
        cnpj: '79.648.523/0001-07',
        nome: 'INDUSTRIA FARMACEUTICA SANTA TEREZINHA LTDA - EPP',
    },
    {
        cnpj: '33.112.665/0001-46',
        nome: 'DFL INDUSTRIA E COMERCIO S/A',
    },
    {
        cnpj: '33.150.764/0001-12',
        nome: 'ACTAVIS FARMACEUTICA LTDA.',
    },
    {
        cnpj: '42.457.796/0001-56',
        nome: 'DIFFUCAP - CHEMOBRAS QUIMICA E FARMACEUTICA LTDA',
    },
    {
        cnpj: '44.211.936/0001-37',
        nome: 'AVERT LABORATORIOS LTDA',
    },
    {
        cnpj: '04.459.117/0001-99',
        nome: 'SAMTEC BIOTECNOLOGIA LIMITADA',
    },
    {
        cnpj: '60.831.658/0001-77',
        nome: 'BOEHRINGER INGELHEIM DO BRASIL QUIMICA E FARMACEUTICA LTDA.',
    },
    {
        cnpj: '03.978.166/0001-75',
        nome: 'DR. REDDYS FARMACEUTICA DO BRASIL LTDA',
    },
    {
        cnpj: '05.240.939/0001-47',
        nome: 'ACTELION PHARMACEUTICALS DO BRASIL LTDA',
    },
    {
        cnpj: '61.186.136/0001-22',
        nome: 'VALEANT FARMACEUTICA DO BRASIL LTDA',
    },
    {
        cnpj: '04.522.600/0001-70',
        nome: 'LUNDBECK BRASIL LTDA',
    },
    {
        cnpj: '61.363.032/0001-46',
        nome: 'CHIESI FARMACEUTICA LTDA',
    },
    {
        cnpj: '01.564.260/0001-52',
        nome: 'WASSER FARMA LTDA',
    },
    {
        cnpj: '04.656.253/0001-79',
        nome: 'MARIOL INDUSTRIAL LTDA',
    },
    {
        cnpj: '65.271.900/0001-19',
        nome: 'NATIVITA IND. COM. LTDA.',
    },
    {
        cnpj: '11.424.477/0001-10',
        nome: 'LEO PHARMA LTDA',
    },
    {
        cnpj: '04.712.572/0001-54',
        nome: 'BALM-LABOR INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '46.179.008/0001-68',
        nome: 'BRASTERAPICA INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '61.129.409/0001-05',
        nome: 'OPHTHALMOS S/A',
    },
    {
        cnpj: '75.014.167/0001-00',
        nome: 'NUNESFARMA DISTRIBUIDORA DE PRODUTOS FARMACEUTICOS LTDA',
    },
    {
        cnpj: '02.456.955/0001-83',
        nome: 'NATULAB LABORATORIO S.A',
    },
    {
        cnpj: '33.051.491/0001-59',
        nome: 'LABORATORIOS PIERRE FABRE DO BRASIL LTDA',
    },
    {
        cnpj: '07.925.705/0001-69',
        nome: 'AUROBINDO PHARMA PRODUTOS FARMACEUTICOS LTDA',
    },
    {
        cnpj: '01.858.973/0001-29',
        nome: 'AIRELA INDUSTRIA FARMACEUTICA LTDA.',
    },
    {
        cnpj: '27.011.022/0001-03',
        nome: 'BL INDUSTRIA OTICA LTDA',
    },
    {
        cnpj: '05.155.425/0001-93',
        nome: 'CASULA & VASCONCELOS INDUSTRIA FARMACEUTICA E COMERCIO LTDA ME',
    },
    {
        cnpj: '17.174.657/0001-78',
        nome: 'HYPOFARMA - INSTITUTO DE HYPODERMIA E FARMACIA LTDA',
    },
    {
        cnpj: '02.281.006/0001-00',
        nome: 'ISOFARMA INDUSTRIAL FARMACEUTICA LTDA',
    },
    {
        cnpj: '60.398.120/0001-10',
        nome: 'LABORATORIO HEPACHOLAN SA',
    },
    {
        cnpj: '33.026.055/0001-20',
        nome: 'LABORATORIO DAUDT OLIVEIRA LTDA',
    },
    {
        cnpj: '31.673.254/0001-02',
        nome: 'LABORATORIOS B. BRAUN S/A',
    },
    {
        cnpj: '88.610.555/0001-04',
        nome: 'INDUSTRIA FARMACEUTICA BASA LTDA',
    },
    {
        cnpj: '43.940.618/0001-44',
        nome: 'ELI LILLY DO BRASIL LTDA',
    },
    {
        cnpj: '56.930.811/0001-46',
        nome: 'LABORATORIO FARMACEUTICO CARESSE LTDA ME',
    },
    {
        cnpj: '02.455.073/0001-01',
        nome: 'CLARIS PRODUTOS FARMACEUTICOS DO BRASIL LTDA',
    },
    {
        cnpj: '08.939.548/0001-03',
        nome: 'INFAN INDUSTRIA QUIMICA FARMACEUTICA NACIONAL S/A',
    },
    {
        cnpj: '03.108.098/0003-55',
        nome: 'BLISFARMA INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '15.127.898/0001-30',
        nome: 'MUNDIPHARMA BRASIL PRODUTOS MEDICOS E FARMACEUTICOS LTDA',
    },
    {
        cnpj: '60.874.187/0001-84',
        nome: 'DAIICHI SANKYO BRASIL FARMACEUTICA LTDA',
    },
    {
        cnpj: '53.359.824/0001-19',
        nome: 'BLANVER FARMOQUIMICA LTDA',
    },
    {
        cnpj: '07.768.134/0001-04',
        nome: 'ASTELLAS FARMA BRASIL IMPORTACAO E DISTRIBUICAO DE MEDICAMENTOS LTDA.',
    },
    {
        cnpj: '10.555.143/0001-13',
        nome: 'GRÜNENTHAL DO BRASIL FARMACEUTICA LTDA.',
    },
    {
        cnpj: '03.993.167/0001-99',
        nome: 'VIDFARMA INDUSTRIA DE MEDICAMENTOS LTDA',
    },
    {
        cnpj: '63.064.653/0001-54',
        nome: 'LABORATORIOS STIEFEL LTDA',
    },
    {
        cnpj: '38.909.503/0001-57',
        nome: 'OPEM REPRESENTACAO IMPORTADORA EXPORTADORA E DISTRIBUIDORA LTDA',
    },
    {
        cnpj: '61.455.192/0001-15',
        nome: 'TRB PHARMA INDUSTRIA QUIMICA E FARMACEUTICA LTDA',
    },
    {
        cnpj: '10.742.412/0001-50',
        nome: 'BRACCO IMAGING DO BRASIL IMPORTACAO E DISTRIBUICAO DE MEDICAMENTOS LTDA',
    },
    {
        cnpj: '04.099.395/0001-82',
        nome: 'SANTISA LABORATORIO FARMACEUTICO S/A',
    },
    {
        cnpj: '33.145.194/0001-72',
        nome: 'LABORATORIO GROSS S. A.',
    },
    {
        cnpj: '29.346.301/0001-53',
        nome: 'LABORATORIO FARMACEUTICO VITAMED LTDA',
    },
    {
        cnpj: '59.748.988/0001-14',
        nome: 'JOHNSON & JOHNSON INDUSTRIAL LTDA.',
    },
    {
        cnpj: '56.990.534/0001-67',
        nome: 'SCHERING DO BRASIL QUIMICA E FARMACEUTICA LTDA',
    },
    {
        cnpj: '33.524.950/0001-74',
        nome: 'LABORATORIO BRASILEIRO DE BIOLOGIA LTDA',
    },
    {
        cnpj: '04.415.365/0001-38',
        nome: 'CHRON EPIGEN INDUSTRIA E COMERCIO LTDA',
    },
    {
        cnpj: '11.082.598/0001-21',
        nome: 'BESINS HEALTHCARE BRASIL COMERCIAL E DISTRIBUIDORA DE MEDICAMENTOS LTDA',
    },
    {
        cnpj: '59.557.124/0001-15',
        nome: 'RECKITT BENCKISER (BRASIL) LTDA',
    },
    {
        cnpj: '06.283.144/0001-89',
        nome: 'HOSPIRA PRODUTOS HOSPITALARES LTDA',
    },
    {
        cnpj: '00.029.372/0001-40',
        nome: 'GE HEALTHCARE DO BRASIL COMERCIO E SERVICOS PARA EQUIPAMENTOS MEDICO-HOSPITALARES LTDA',
    },
    {
        cnpj: '30.153.811/0001-93',
        nome: 'MALLINCKRODT DO BRASIL LTDA',
    },
    {
        cnpj: '08.002.360/0001-34',
        nome: 'BIOMARIN BRASIL FARMACEUTICA LTDA',
    },
    {
        cnpj: '01.784.792/0001-03',
        nome: 'EQUIPLEX INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '64.711.500/0001-14',
        nome: 'UCB BIOPHARMA S.A.',
    },
    {
        cnpj: '05.452.889/0001-61',
        nome: 'CELLTRION HEALTHCARE DISTRIBUICAO DE PRODUTOS FARMACEUTICOS DOS BRASIL LTDA',
    },
    {
        cnpj: '42.180.406/0001-43',
        nome: 'GUERBET PRODUTOS RADIOLOGICOS LTDA',
    },
    {
        cnpj: '33.379.884/0001-96',
        nome: 'LABORATORIO SIMOES LTDA.',
    },
    {
        cnpj: '92.670.801/0001-82',
        nome: 'GEYER MEDICAMENTOS S/A',
    },
    {
        cnpj: '00.394.429/0099-14',
        nome: 'LABORATORIO QUIMICO FARMACEUTICO DA AERONAUTICA',
    },
    {
        cnpj: '00.413.925/0001-64',
        nome: 'COLBRAS INDUSTRIA E COMERCIO LTDA',
    },
    {
        cnpj: '28.614.626/0001-07',
        nome: 'LABORATORIO DE EXTRATOS ALERGENICOS LTDA',
    },
    {
        cnpj: '55.972.087/0001-50',
        nome: 'JP INDUSTRIA FARMACEUTICA S/A',
    },
    {
        cnpj: '13.651.943/0001-26',
        nome: 'MEDA PHARMA IMPORTACAO E EXPORTACAO DE PRODUTOS FARMACEUTICOS LTDA.',
    },
    {
        cnpj: '03.108.098/0001-93',
        nome: 'BLISFARMA INDUSTRIA FARMACEUTICA LTDA - ME',
    },
    {
        cnpj: '24.365.710/0001-83',
        nome: 'UNIVERSIDADE FEDERAL DO RIO GRANDE DO NORTE',
    },
    {
        cnpj: '08.416.362/0001-70',
        nome: 'EISAI LABORATORIOS LTDA',
    },
    {
        cnpj: '92.928.951/0001-43',
        nome: 'LABORATORIO INDUSTRIAL FARMACEUTICO LIFAR LTDA',
    },
    {
        cnpj: '60.862.208/0001-41',
        nome: 'FARMACIA E LABORATORIO HOMEOPATICO ALMEIDA PRADO LTDA',
    },
    {
        cnpj: '49.324.221/0001-04',
        nome: 'FRESENIUS KABI BRASIL LTDA',
    },
    {
        cnpj: '33.781.055/0001-35',
        nome: 'FUNDACAO OSWALDO CRUZ',
    },
    {
        cnpj: '33.517.558/0001-06',
        nome: 'QUIMICA FARMACEUTICA NIKKHO DO BRASIL LTDA',
    },
    {
        cnpj: '49.383.250/0001-47',
        nome: 'HISAMITSU FARMACEUTICA DO BRASIL LTDA',
    },
    {
        cnpj: '15.670.288/0001-89',
        nome: 'GILEAD SCIENCES FARMACEUTICA DO BRASIL LTDA',
    },
    {
        cnpj: '32.149.544/0001-06',
        nome: 'DISMEDICA DISTRIBUIDORA DE PRODUTOS HOSPITALARES E FARMACEUTICOS LTDA',
    },
    {
        cnpj: '84.684.620/0001-87',
        nome: 'LABORATORIO CATARINENSE LTDA',
    },
    {
        cnpj: '33.019.548/0001-32',
        nome: 'SILVESTRE LABS QUIMICA E FARMACEUTICA LTDA',
    },
    {
        cnpj: '39.032.974/0001-92',
        nome: 'VIC PHARMA INDUSTRIA E COMERCIO LTDA',
    },
    {
        cnpj: '32.137.424/0001-99',
        nome: 'ALKO DO BRASIL INDUSTRIA E COMERCIO LTDA',
    },
    {
        cnpj: '12.343.158/0001-43',
        nome: 'LABORATORIO INDUSTRIAL FARMACEUTICO DE ALAGOAS S.A',
    },
    {
        cnpj: '06.629.745/0001-09',
        nome: 'NOVAFARMA INDUSTRIA FARMACEUTICA LTDA',
    },
    {
        cnpj: '46.070.868/0036-99',
        nome: 'LABORATORIOS PFIZER LTDA',
    },
    {
        cnpj: '08.055.634/0001-53',
        nome: 'IMEC - INDUSTRIA DE MEDICAMENTOS CUSTODIA LTDA',
    },
    {
        cnpj: '05.090.043/0001-29',
        nome: 'DROXTER INDUSTRIA, COMERCIO E PARTICIPACOES LTDA',
    },
    {
        cnpj: '21.561.931/0001-39',
        nome: 'LABORATORIO SANOBIOL LIMITADA',
    },
    {
        cnpj: '92.927.094/0001-67',
        nome: 'INDUSTRIA FARMACEUTICA TEXON LTDA',
    },
    {
        cnpj: '00.625.692/0001-63',
        nome: 'TOMMASI IMPORTACAO E EXPORTACAO LTDA',
    },
    {
        cnpj: '59.476.770/0001-58',
        nome: 'PROCTER & GAMBLE DO BRASIL S/A',
    },
    {
        cnpj: '91.671.792/0001-81',
        nome: 'LABORATORIO SAUDE LTDA',
    },
    {
        cnpj: '84.683.382/0001-95',
        nome: 'MINANCORA & CIA LTDA',
    },
    {
        cnpj: '00.394.452/0001-03',
        nome: 'COMANDO DO EXERCITO',
    },
]

Laboratorio.bulkCreate(laboratorios)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    })
