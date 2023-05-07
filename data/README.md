# Data Requirements

- [Data Requirements](#data-requirements)
  * [Table](#table)
    + <input type="checkbox" disabled checked/>[Pupulation data](#pupulation-data)
    + <input type="checkbox" disabled checked/>[Housing price](#housing-price)
    + <input type="checkbox" disabled checked/>[Income](#income)
  * [Geodata](#geodata)
    + <input type="checkbox" disabled checked/>[MOSA](#mosa)
    + <input type="checkbox" disabled/>[Building footprint](#building-footprint)
    + <input type="checkbox" disabled checked/>[Tube line](#tube-line)

## Table

### Pupulation data

**File name**: pop_02to20_MSOA.csv
**Format**: CSV
**Data source**: [ONS - Middle Super Output Area population estimates](https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/middlesuperoutputareamidyearpopulationestimates) provided by Wang, Jingyi
**Final process**: Gong, Yubin.
**Sample**:     


| MSOA11CD  | 2002pop | 2003pop | ... |
| ----------- | --------- | --------- | ----- |
| E02000001 | 7280    | 7115    | ... |
| E02000002 | 6333    | 6312    | ... |

### Housing price

**File name**: houseprice_msoa.csv
**Format**: CSV
**Data source**: [ONS - Median house prices by middle layer super output area](https://www.ons.gov.uk/peoplepopulationandcommunity/housing/datasets/hpssadataset2medianhousepricebymsoaquarterlyrollingyear); [ONS - Mean house prices by middle layer super output area](https://www.ons.gov.uk/peoplepopulationandcommunity/housing/datasets/hpssadataset3meanhousepricebymsoaquarterlyrollingyear)  provided by Wang, Jingyi; Gong, Yubin
**Final process**: Gong, Yubin.
**Sample**:


| Local authority code | Local authority name | MSOA code | MSOA name                | 1996_mean | ... |
| ---------------------- | ---------------------- | ----------- | -------------------------- | ----------- | ----- |
| E09000001            | City of London       | E02000001 | City of London 001       | 105,000   | ... |
| E09000002            | Barking and Dagenham | E02000002 | Barking and Dagenham 001 | 56500     | ... |

### Income

**File name**: income_01to12.csv; income_12to18.csv
**Format**: CSV
**Data source**: [London Datastore - Household Income Estimates for Small Areas 01-12](https://data.london.gov.uk/dataset/household-income-estimates-small-areas) provided by Wang, Jingyi; [ONS - Income estimates for small areas, 12-18](https://www.ons.gov.uk/employmentandlabourmarket/peopleinwork/earningsandworkinghours/datasets/smallareaincomeestimatesformiddlelayersuperoutputareasenglandandwales) provided by Gong, Yubin
**Final process**: Gong, Yubin; Wang, Jingyi;
**Sample**:    


| MSOA_code | MSOA_name                | Local_authority_code | Local_authority_name | 2012_annual | ... |
| ----------- | -------------------------- | ---------------------- | ---------------------- | ------------- | ----- |
| E02000001 | City of London 001       | E09000001            | City of London       | 65000       | ... |
| E02000002 | Barking and Dagenham 001 | E09000002            | Barking and Dagenham | 32760       | ... |

## Geodata

### MOSA

**File name**: MSOA_London.json
**Format**: Geojson, polygon
**Data source**: [ONS - MSOA (Dec 2001) Boundaries](https://geoportal.statistics.gov.uk/datasets/ons::msoa-dec-2001-boundaries-ew-bfc/about) provide by Xia, Fan
**Processed by**: Xia, Fan
**Attributes**: MOSA_Code, MOSA_Name
**CRS**: EPSG4326
**MOSA_CODE**: E02000001-E02000983

### Building footprint

**File name**: building_yyyy.geojson
**Format**: Geojson, Polygon
**Data source**: [Digimap - OS Data Download](https://digimap.edina.ac.uk/roam/download/os)
**Processed by**: Xia, Fan
**Attributes**: absh2, relh2,
**CRS**: EPSG4326
**Example**:   


| absh2 | relh2 |
| ------- | ------- |
| 13.1  | 11.3  |
| 7.0   | 4.0   |

### Tube line

**File name**: london_tube.json
**Format**: Geojson, line
**Data source**: Practical of CASA03
**Processed by**: Xia, Fan
**Attributes**: Line_name, built_time, last_extension,
**CRS**: EPSG4326
**Example**:   


| Line_name  | built_time | last_extension |
| ------------ | ------------ | ---------------- |
| WaterlooCi | 1898       | 1994           |
| Bakerloo   | 1906       | 1917           |
