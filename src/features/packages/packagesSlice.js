import { createSlice } from "@reduxjs/toolkit";

export const packagesSlice = createSlice({
  name: "packages",
  initialState: {
    regions: [
      {
        id: 1,
        region: "Asia",
        country: "Hong Kong",
        package: [
          { name: "Hong Kong 1 day", price: 1.8, id: 1 },
          { name: "Hong Kong 2 days", price: 2.9, id: 2 },
          { name: "Hong Kong 3 days", price: 3.6, id: 3 },
          { name: "Hong Kong 5 days", price: 4.6, id: 4 },
          { name: "Hong Kong 7 days", price: 5.0, id: 5 },
        ],
        remarks: "2GB high-speed traffic per day, then FUP",
      },
      {
        id: 2,
        region: "Asia",
        country: "Macao",
        package: [
          { name: "Macao 1 day", price: 2.5, id: 1 },
          { name: "Macao 2 days", price: 2.9, id: 2 },
          { name: "Macao 3 days", price: 3.6, id: 3 },
          { name: "Macao 5 days", price: 4.6, id: 4 },
          { name: "Macao 7 days", price: 5.0, id: 5 },
        ],
        remarks: "1GB high-speed traffic per day, then FUP",
      
      },
      {
        id: 3,
        region: "Asia",
        country: "Taiwan",
        package: [
          { name: "Taiwan 3 Days", price: 4.0, id: 1 },
          { name: "Taiwan 5 Days", price: 5.5, id: 2 },
          { name: "Taiwan 7 Days", price: 7.7, id: 3 },
          { name: "Taiwan 10 Days", price: 10.6, id: 4 },
        ],
        remarks: "Unlimited Data(500MB/day high speed)",
       
        popular: true,
      },
      {
        id: 4,
        region: "Asia",
        country: "Hong Kong|Macao",
        package: [
          { name: "Hong Kong|Macao 1 day", price: 3.2, id: 1 },
          { name: "Hong Kong|Macao 2 days", price: 4.3, id: 2 },
          { name: "Hong Kong|Macao 3 days", price: 4.9, id: 3 },
          { name: "Hong Kong|Macao 5 days", price: 5.4, id: 4 },
          { name: "Hong Kong|Macao 7 days", price: 6.4, id: 5 },
        ],
        remarks: "2GB high-speed traffic per day, then FUP",
     
      },
      {
        id: 5,
        region: "Asia",
        country: "China",
        package: [
          { name: "Greater China 1 day", price: 2.5, id: 1 },
          { name: "Greater China 2 days", price: 5.0, id: 2 },
          { name: "Greater China 3 days", price: 7.6, id: 3 },
          { name: "Greater China 5 days", price: 11.8, id: 4 },
          { name: "Greater China 7 days", price: 16.3, id: 5 },
          { name: "Greater China 10 days", price: 19.9, id: 6 },
        ],
        remarks: "Unlimited Data Package",
       
      },
      {
        id: 6,
        region: "Asia",
        country: "Japan",
        package: [
          { name: "Japan 3 Days", price: 4.6, id: 1 },
          { name: "Japan 5 Days", price: 6.7, id: 2 },
          { name: "Japan 7 Days", price: 8.6, id: 3 },
          { name: "Japan 8 Days", price: 9.2, id: 4 },
          { name: "Japan 10 Days", price: 10.6, id: 5 },
          { name: "Japan 12 Days", price: 12.5, id: 6 },
          { name: "Japan 30 Days 15GB Data Package", price: 22.2, id: 7 },
        ],
        remarks: "Unlimited Data(500MB/day high speed)",
        
        popular: true,
      },
      {
        id: 7,
        region: "Asia",
        country: "South Korea",
        package: [
          { name: "South Korea 3 Days", price: 4.1, id: 1 },
          { name: "South Korea 5", price: 6.5, id: 2 },
          { name: "South Korea 7 Days", price: 8.9, id: 3 },
          { name: "South Korea 8 Days", price: 10.2, id: 4 },
          { name: "South Korea 10 Days", price: 12.5, id: 5 },
          { name: "South Korea 12 Days", price: 14.8, id: 6 },
          { name: "South Korea 15 Days", price: 18.1, id: 7 },
          { name: "South Korea 20 Days", price: 23.0, id: 8 },
          { name: "South Korea 30 Days", price: 34.6, id: 9 },
        ],
        remarks: "Unlimited Data Package",
  
        popular: true,
      },
      {
        id: 8,
        region: "Asia",
        country: "Singapore",
        package: [
          { name: "Singapore 3 Days", price: 2.8, id: 1 },
          { name: "Singapore 4 Days", price: 3.2, id: 2 },
          { name: "Singapore 5 Days", price: 3.8, id: 3 },
          { name: "Singapore 6 Days", price: 4.3, id: 4 },
          { name: "Singapore 7 Days", price: 4.7, id: 5 },
          { name: "Singapore 10 Days", price: 6.4, id: 6 },
        ],
        remarks: " Unlimited Data Package",
 
        popular: true,
      },
      {
        id: 9,
        region: "Asia",
        country: "Malaysia",
        package: [
          { name: "Malaysia 3 Days", price: 2.8, id: 1 },
          { name: "Malaysia 4 Days", price: 3.2, id: 2 },
          { name: "Malaysia 5 Days", price: 4.1, id: 3 },
          { name: "Malaysia 6 Days", price: 4.8, id: 4 },
          { name: "Malaysia 7 Days", price: 5.8, id: 5 },
          { name: "Malaysia 10 Days", price: 8.0, id: 6 },
        ],
        reamrks: "Unlimited Data(500MB/day high speed)",
     
        popular: true,
      },
      {
        id: 10,
        region: "Asia",
        country: "Thailand",
        package: [
          { name: "Thailand 3 Days", price: 2.8, id: 1 },
          { name: "Thailand 4 Days", price: 3.2, id: 2 },
          { name: "Thailand 5 Days", price: 3.8, id: 3 },
          { name: "Thailand 6 Days", price: 4.3, id: 4 },
          { name: "Thailand 7 Days", price: 4.7, id: 5 },
          { name: "Thailand 10 Days", price: 6.4, id: 6 },
        ],
        remarks: "Unlimited Data Package",
      
        popular: true,
      },
      {
        id: 11,
        region: "Asia",
        country: "Singapore|Malaysia|Thailand",
        package: [
          { name: "Singapore|Malaysia|Thailand 3 Days", price: 3.0, id: 1 },
          { name: "Singapore|Malaysia|Thailand 4 Days", price: 3.6, id: 2 },
          { name: "Singapore|Malaysia|Thailand 5 Days", price: 4.7, id: 3 },
          { name: "Singapore|Malaysia|Thailand 6 Days", price: 5.5, id: 4 },
          { name: "Singapore|Malaysia|Thailand 7 Days", price: 6.5, id: 5 },
          { name: "Singapore|Malaysia|Thailand 10 Days", price: 9.0, id: 6 },
        ],
        remarks: "1GB high-speed traffic per day, then FUP",
   
      },
      {
        id: 12,
        region: "Asia",
        country: "Myanmar",
        package: [
          { name: "Myanmar 3 Days", price: 7.6, id: 1 },
          { name: "Myanmar 4 Days", price: 9.5, id: 2 },
          { name: "Myanmar 5 Days", price: 10.9, id: 3 },
          { name: "Myanmar 6 Days", price: 12.0, id: 4 },
          { name: "Myanmar 7 Days", price: 12.7, id: 5 },
          { name: "Myanmar 10 Days", price: 17.3, id: 6 },
        ],
        remarks: 'Unlimited Data(500MB/day high speed)'
      },
      {
        id: 13,
        region: "Asia",
        country: "Indonesia",
        package: [
          { name: "Indonesia 3 Days", price: 4.1, id: 1 },
          { name: "Indonesia 4 Days", price: 4.8, id: 2 },
          { name: "Indonesia 5 Days", price: 5.4, id: 3 },
          { name: "Indonesia 6 Days", price: 6.5, id: 4 },
          { name: "Indonesia 7 Days", price: 7.6, id: 5 },
          { name: "Indonesia 10 Days", price: 10.8, id: 6 },
        ],
        remarks: 'Unlimited Data(500MB/day high speed)'
      },
      {
        id: 14,
        region: "Asia",
        country: "Vietnam",
        package: [
          { name: "Vietnam 3 Days", price: 2.9, id: 1 },
          { name: "Vietnam 4 Days", price: 3.2, id: 2 },
          { name: "Vietnam 5 Days", price: 4.1, id: 3 },
          { name: "Vietnam 6 Days", price: 4.8, id: 4 },
          { name: "Vietnam 7 Days", price: 5.8, id: 5 },
          { name: "Vietnam 10 Days", price: 8.0, id: 6 },
        ],
        remarks: "2GB high-speed traffic per day, then FUP",
    
      },
      {
        id: 15,
        region: "Asia",
        country: "Cambodia",
        package: [
          { name: "Cambodia 3 Days", price: 4.2, id: 1 },
          { name: "Cambodia 4 Days", price: 5.5, id: 2 },
          { name: "Cambodia 5 Days", price: 6.6, id: 3 },
          { name: "Cambodia 6 Days", price: 7.9, id: 4 },
          { name: "Cambodia 7 Days", price: 9.2, id: 5 },
          { name: "Cambodia 10 Days", price: 13.2, id: 6 },
        ],
       remarks: 'Unlimited Data(500MB/day high speed)'
      },
      {
        id: 16,
        region: "Europe",
        country: "Europe",
        package: [
          { name: "Europe 5 Days", price: 8.0, id: 1 },
          { name: "Europe 7 Days", price: 10.1, id: 2 },
          { name: "Europe 10 Days", price: 12.8, id: 3 },
          { name: "Europe 15 Days", price: 16.1, id: 4 },
          { name: "Europe 20 Days", price: 21.5, id: 5 },
          { name: "Europe 30 Days", price: 26.9, id: 6 },
        ],
        remarks: "Unlimited Data(500MB/day high speed)",

      },
      {
        id: 17,
        region: "North America",
        country: "USA",
        package: [
          { name: "USA 5 Days", price: 12.1, id: 1 },
          { name: "USA 7 Days", price: 17.4, id: 2 },
          { name: "USA 10 Days", price: 21.0, id: 3 },
          { name: "USA 15 Days", price: 22.6, id: 4 },
          { name: "USA 20 Days", price: 29.8, id: 5 },
          { name: "USA 30 Days", price: 42.0, id: 6 },
        ],
        remarks: "Unlimited Data(500MB/day high speed)",
   
        popular: true,
      },
      {
        id: 18,
        region: "North America",
        country: "USA|Canada",
        package: [
          { name: "USA | Canada 5 Days", price: 13.3, id: 1 },
          { name: "USA | Canada 7 Days", price: 19.1, id: 2 },
          { name: "USA | Canada 10 Days", price: 23.2, id: 3 },
          { name: "USA | Canada 15 Days", price: 24.8, id: 4 },
          { name: "USA | Canada 20 Days", price: 32.6, id: 5 },
          { name: "USA | Canada 30 Days", price: 46.2, id: 6 },
        ],
        remarks: "Unlimited Data(500MB/day high speed)",
   
      },
      {
        id: 19,
        region: "Oceania",
        country: "Australia",
        package: [
          { name: "Australia 5 Days", price: 8.2, id: 1 },
          { name: "Australia 7 Days", price: 10.2, id: 2 },
          { name: "Australia 10 Days", price: 12.7, id: 3 },
          { name: "Australia 15 Days", price: 19.7, id: 4 },
          { name: "Australia 20 Days", price: 26.9, id: 5 },
        ],
        remarks: "Unlimited Data(500MB/day high speed)",
 
      },
      {
        id: 20,
        region: "Oceania",
        country: "New Zealand",
        package: [
          { name: "New Zealand 5 Days", price: 10.8, id: 1 },
          { name: "New Zealand 7 Days", price: 13.4, id: 2 },
          { name: "New Zealand 10 Days", price: 16.1, id: 3 },
          { name: "New Zealand 15 Days", price: 24.1, id: 4 },
          { name: "New Zealand 20 Days", price: 32.3, id: 5 },
        ],
        remarks: "Unlimited Data(500MB/day high speed)",
      
      },
      {
        id: 22,
        region: "Global",
        country: "Multi regional(exclude China)",
        package: [
          { name: "Multi regional 1 day", price: 3.6, id: 1 },
          { name: "Multi regional 3 days", price: 10.8, id: 2 },
          { name: "Multi regional 5 days", price: 17.9, id: 3 },
          { name: "Multi regional 7 days", price: 25.1, id: 4 },
          { name: "Multi regional 10 days", price: 35.8, id: 5 },
          { name: "Multi regional 15 days", price: 38.6, id: 6 },
          { name: "Multi regional 30 days", price: 55.9, id: 7 },
        ],
        remarks: [
          "300MB per day, then FUP",
        ],
    
      },
      {
        id: 23,
        region: "Global",
        country: "Multi regional(include China)",
        package: [
          { name: "Multi regional 1 day", price: 4.0, id: 1 },
          { name: "Multi regional 3 days", price: 11.4, id: 2 },
          { name: "Multi regional 5 days", price: 19.0, id: 3 },
          { name: "Multi regional 7 days", price: 26.2, id: 4 },
          { name: "Multi regional 10 days", price: 37.2, id: 5 },
          { name: "Multi regional 15 days", price: 40.1, id: 6 },
          { name: "Multi regional 30 days", price: 57.2, id: 7 },
        ],
        remarks:
          "300MB per day, then FUP",
    
      },
    ],
    chosenRegion: 'Asia',
    chosenCountries: [{
      id: 1,
      region: "Asia",
      country: "Hong Kong",
      package: [
        { name: "Hong Kong 1 day", price: 1.8, id: 1 },
        { name: "Hong Kong 2 days", price: 2.9, id: 2 },
        { name: "Hong Kong 3 days", price: 3.6, id: 3 },
        { name: "Hong Kong 5 days", price: 4.6, id: 4 },
        { name: "Hong Kong 7 days", price: 5.0, id: 5 },
      ],
      remarks: "2GB high-speed traffic per day, then FUP",
    },
    {
      id: 2,
      region: "Asia",
      country: "Macao",
      package: [
        { name: "Macao 1 day", price: 2.5, id: 1 },
        { name: "Macao 2 days", price: 2.9, id: 2 },
        { name: "Macao 3 days", price: 3.6, id: 3 },
        { name: "Macao 5 days", price: 4.6, id: 4 },
        { name: "Macao 7 days", price: 5.0, id: 5 },
      ],
      remarks: "1GB high-speed traffic per day, then FUP",
    
    },
    {
      id: 3,
      region: "Asia",
      country: "Taiwan",
      package: [
        { name: "Taiwan 3 Days", price: 4.0, id: 1 },
        { name: "Taiwan 5 Days", price: 5.5, id: 2 },
        { name: "Taiwan 7 Days", price: 7.7, id: 3 },
        { name: "Taiwan 10 Days", price: 10.6, id: 4 },
      ],
      remarks: "Unlimited Data(500MB/day high speed)",
     
      popular: true,
    },
    {
      id: 4,
      region: "Asia",
      country: "Hong Kong|Macao",
      package: [
        { name: "Hong Kong/Macao 1 day", price: 3.2, id: 1 },
        { name: "Hong Kong/Macao 2 days", price: 4.3, id: 2 },
        { name: "Hong Kong/Macao 3 days", price: 4.9, id: 3 },
        { name: "Hong Kong/Macao 5 days", price: 5.4, id: 4 },
        { name: "Hong Kong/Macao 7 days", price: 6.4, id: 5 },
      ],
      remarks: "2GB high-speed traffic per day, then FUP",
   
    },
    {
      id: 5,
      region: "Asia",
      country: "China",
      package: [
        { name: "Greater China 1 day", price: 2.5, id: 1 },
        { name: "Greater China 2 days", price: 5.0, id: 2 },
        { name: "Greater China 3 days", price: 7.6, id: 3 },
        { name: "Greater China 5 days", price: 11.8, id: 4 },
        { name: "Greater China 7 days", price: 16.3, id: 5 },
        { name: "Greater China 10 days", price: 19.9, id: 6 },
      ],
      remarks: "Unlimited Data Package",
     
    },
    {
      id: 6,
      region: "Asia",
      country: "Japan",
      package: [
        { name: "Japan 3 Days", price: 4.6, id: 1 },
        { name: "Japan 5 Days", price: 6.7, id: 2 },
        { name: "Japan 7 Days", price: 8.6, id: 3 },
        { name: "Japan 8 Days", price: 9.2, id: 4 },
        { name: "Japan 10 Days", price: 10.6, id: 5 },
        { name: "Japan 12 Days", price: 12.5, id: 6 },
        { name: "Japan 30 Days 15GB Data Package", price: 22.2, id: 7 },
      ],
      remarks: "Unlimited Data(500MB/day high speed)",
      
      popular: true,
    },
    {
      id: 7,
      region: "Asia",
      country: "South Korea",
      package: [
        { name: "South Korea 3 Days", price: 4.1, id: 1 },
        { name: "South Korea 5", price: 6.5, id: 2 },
        { name: "South Korea 7 Days", price: 8.9, id: 3 },
        { name: "South Korea 8 Days", price: 10.2, id: 4 },
        { name: "South Korea 10 Days", price: 12.5, id: 5 },
        { name: "South Korea 12 Days", price: 14.8, id: 6 },
        { name: "South Korea 15 Days", price: 18.1, id: 7 },
        { name: "South Korea 20 Days", price: 23.0, id: 8 },
        { name: "South Korea 30 Days", price: 34.6, id: 9 },
      ],
      remarks: "Unlimited Data Package",

      popular: true,
    },
    {
      id: 8,
      region: "Asia",
      country: "Singapore",
      package: [
        { name: "Singapore 3 Days", price: 2.8, id: 1 },
        { name: "Singapore 4 Days", price: 3.2, id: 2 },
        { name: "Singapore 5 Days", price: 3.8, id: 3 },
        { name: "Singapore 6 Days", price: 4.3, id: 4 },
        { name: "Singapore 7 Days", price: 4.7, id: 5 },
        { name: "Singapore 10 Days", price: 6.4, id: 6 },
      ],
      remarks: " Unlimited Data Package",

      popular: true,
    },
    {
      id: 9,
      region: "Asia",
      country: "Malaysia",
      package: [
        { name: "Malaysia 3 Days", price: 2.8, id: 1 },
        { name: "Malaysia 4 Days", price: 3.2, id: 2 },
        { name: "Malaysia 5 Days", price: 4.1, id: 3 },
        { name: "Malaysia 6 Days", price: 4.8, id: 4 },
        { name: "Malaysia 7 Days", price: 5.8, id: 5 },
        { name: "Malaysia 10 Days", price: 8.0, id: 6 },
      ],
      reamrks: "Unlimited Data(500MB/day high speed)",
   
      popular: true,
    },
    {
      id: 10,
      region: "Asia",
      country: "Thailand",
      package: [
        { name: "Thailand 3 Days", price: 2.8, id: 1 },
        { name: "Thailand 4 Days", price: 3.2, id: 2 },
        { name: "Thailand 5 Days", price: 3.8, id: 3 },
        { name: "Thailand 6 Days", price: 4.3, id: 4 },
        { name: "Thailand 7 Days", price: 4.7, id: 5 },
        { name: "Thailand 10 Days", price: 6.4, id: 6 },
      ],
      remarks: "Unlimited Data Package",
    
      popular: true,
    },
    {
      id: 11,
      region: "Asia",
      country: "Singapore|Malaysia|Thailand",
      package: [
        { name: "Singapore/Malaysia/Thailand 3 Days", price: 3.0, id: 1 },
        { name: "Singapore/Malaysia/Thailand 4 Days", price: 3.6, id: 2 },
        { name: "Singapore/Malaysia/Thailand 5 Days", price: 4.7, id: 3 },
        { name: "Singapore/Malaysia/Thailand 6 Days", price: 5.5, id: 4 },
        { name: "Singapore/Malaysia/Thailand 7 Days", price: 6.5, id: 5 },
        { name: "Singapore/Malaysia/Thailand 10 Days", price: 9.0, id: 6 },
      ],
      remarks: "1GB high-speed traffic per day, then FUP",
 
    },
    {
      id: 12,
      region: "Asia",
      country: "Myanmar",
      package: [
        { name: "Myanmar 3 Days", price: 7.6, id: 1 },
        { name: "Myanmar 4 Days", price: 9.5, id: 2 },
        { name: "Myanmar 5 Days", price: 10.9, id: 3 },
        { name: "Myanmar 6 Days", price: 12.0, id: 4 },
        { name: "Myanmar 7 Days", price: 12.7, id: 5 },
        { name: "Myanmar 10 Days", price: 17.3, id: 6 },
      ],
      remarks: 'Unlimited Data(500MB/day high speed)'
    },
    {
      id: 13,
      region: "Asia",
      country: "Indonesia",
      package: [
        { name: "Indonesia 3 Days", price: 4.1, id: 1 },
        { name: "Indonesia 4 Days", price: 4.8, id: 2 },
        { name: "Indonesia 5 Days", price: 5.4, id: 3 },
        { name: "Indonesia 6 Days", price: 6.5, id: 4 },
        { name: "Indonesia 7 Days", price: 7.6, id: 5 },
        { name: "Indonesia 10 Days", price: 10.8, id: 6 },
      ],
      remarks: 'Unlimited Data(500MB/day high speed)'
    },
    {
      id: 14,
      region: "Asia",
      country: "Vietnam",
      package: [
        { name: "Vietnam 3 Days", price: 2.9, id: 1 },
        { name: "Vietnam 4 Days", price: 3.2, id: 2 },
        { name: "Vietnam 5 Days", price: 4.1, id: 3 },
        { name: "Vietnam 6 Days", price: 4.8, id: 4 },
        { name: "Vietnam 7 Days", price: 5.8, id: 5 },
        { name: "Vietnam 10 Days", price: 8.0, id: 6 },
      ],
      remarks: "2GB high-speed traffic per day, then FUP",
  
    },
    {
      id: 15,
      region: "Asia",
      country: "Cambodia",
      package: [
        { name: "Cambodia 3 Days", price: 4.2, id: 1 },
        { name: "Cambodia 4 Days", price: 5.5, id: 2 },
        { name: "Cambodia 5 Days", price: 6.6, id: 3 },
        { name: "Cambodia 6 Days", price: 7.9, id: 4 },
        { name: "Cambodia 7 Days", price: 9.2, id: 5 },
        { name: "Cambodia 10 Days", price: 13.2, id: 6 },
      ],
      remarks: 'Unlimited Data(500MB/day high speed)'
    }],
    simCard:{
      simNum:0,
      simCode:0
    }
  },
  reducers: {
    selectRegion: (state, action) => {
      state.chosenRegion = action.payload;
      state.chosenCountries = state.regions.filter(item => item.region === action.payload)
    },
    submitCard: (state, action) => {
      state.simCard.simNum = action.payload.simCardNum;
      state.simCard.simCode = action.payload.simCardCode;
    }
  }
});

export const { selectRegion, submitCard } = packagesSlice.actions;

export default packagesSlice.reducer;
