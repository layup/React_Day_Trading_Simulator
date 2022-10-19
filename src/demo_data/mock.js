export const mockSearchResults = {
    "count": 4,
    "result": [
      {
        "description": "APPLE INC",
        "displaySymbol": "AAPL",
        "symbol": "AAPL",
        "type": "Common Stock",
        "price": 200
      },
      {
        "description": "APPLE INC",
        "displaySymbol": "AAPL.SW",
        "symbol": "AAPL.SW",
        "type": "Common Stock",
        "price": 256
      },
      {
        "description": "APPLE INC",
        "displaySymbol": "APC.BE",
        "symbol": "APC.BE",
        "type": "Common Stock",
        "price": 212
      },
      {
        "description": "APPLE INC",
        "displaySymbol": "APC.DE",
        "symbol": "APC.DE",
        "type": "Common Stock",
        "price": 202
      },

    ]
}

export const mockHoldings = {
  "count": 4, 
  "result": [
    {
      "description": "Apple Inc",  
      "symbol": "APPL", 
      "lastPrice":250.2 , 
      "equity": 521.43 ,  
      "todayReturn": 8.30,  
      "totalReturn": 60.22, 
    }
  ]
}

export const mockCompanyDetails = {
    "country": "US",
    "currency": "USD",
    "exchange": "NASDAQ/NMS (GLOBAL MARKET)",
    "ipo": "1980-12-12",
    "marketCapitalization": 1415993,
    "name": "Apple Inc",
    "phone": "14089961010",
    "shareOutstanding": 4375.47998046875,
    "ticker": "AAPL",
    "weburl": "https://www.apple.com/",
    "logo": "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
    "finnhubIndustry":"Technology"
}

export const mockStockQuote = {
    "c": 261.74,
    "h": 263.31,
    "l": 260.68,
    "o": 261.07,
    "pc": 259.45,
    "t": 1582641000 
}

export const mockHistoricalData = {
    "c": [
      217.68,
      221.03,
      219.89
    ],
    "h": [
      222.49,
      221.5,
      220.94
    ],
    "l": [
      217.19,
      217.1402,
      218.83
    ],
    "o": [
      221.03,
      218.55,
      220
    ],
    "s": "ok",
    "t": [
      1569297600,
      1569384000,
      1569470400
    ],
    "v": [
      33463820,
      24018876,
      20730608
    ]
}

export const portfolioValue = {
    'c': [
      10000, 
      10107.21,
      10152.35, 
      10211.77, 
      10231.26,
      10199.85, 
      10211.75

    ], 
    't': [
      1648870961,
      1648957361, 
      1649043761,
      1649130161, 
      1649216561,
      1649302961,
      1649389361
    ]
}