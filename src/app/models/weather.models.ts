export interface StockData {
    status: string
    request_id: string
    data: Data
  }
  
  
  export interface Stock {
    symbol: string
    name: string
    type: string
    price: number
    change: number
    change_percent: number
    previous_close: number
    last_update_utc: string
    country_code: string
    exchange: string
    exchange_open: string
    exchange_close: string
    timezone: string
    utc_offset_sec: number
    currency: string
    google_mid: string
  }
  export interface Data {
    stock: Stock[]
    ETF: any[]
    index: any[]
    mutual_fund: MutualFund[]
    currency: any[]
    futures: any[]
  }
  
  export interface MutualFund {
    symbol: string
    name: string
    type: string
    price: number
    change: number
    change_percent: number
    previous_close: number
    last_update_utc: string
    currency: string
    google_mid: string
  }
  