# Data Requirements

- [Data Requirements](#data-requirements)
  * [Table](#table)
    + [Pupulation data](#pupulation-data)
    + [Housing price](#housing-price)
    + [Income](#income)
  * [Geodata](#geodata)
    + [MOSA](#mosa)
    + [Building footprint](#building-footprint)
    + [Tube line](#tube-line)
    
## Table 
### Pupulation data
Format: CSV, table   
Sample:    
|MOSA_code|pop_yyyy|...|   
|--|--|--|   
|id_1|1000|...|   
|id_2|1000|...|  
    
Current:  Census 2002-2012   

By: Lv Pin


### Housing price
Format: CSV, table   
Sample:    
|MOSA_code|price_yyyy|...|   
|--|--|--|   
|id_1|1000|...|   
|id_2|1000|...|  

Current: median price from 1995 to 2022 in MSOA

By: Wang Jingyi,

### Income
Format: CSV, table   
Sample:    
|MOSA_code|income_yyyy|...|   
|--|--|--|   
|id_1|1000|...|   
|id_2|1000|...| 

## Geodata
### MOSA
Format: Geojson, polygon
Attributes: MOSA_Code, MOSA_Name

MOSA_CODE: E02000001-E02000983
CRS: EPSG4326

### Building footprint
Format: Geojson, polygon   
Attributes: buidling height, landuse/building type, 

### Tube line
Format: Geojson, line
Attributes: tube_id, line_name, buildup_time,  