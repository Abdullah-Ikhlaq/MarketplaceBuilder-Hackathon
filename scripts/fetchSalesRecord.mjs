import axios from 'axios'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'
import { createClient } from 'next-sanity'

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2025-01-08",
})

async function importData() {
  try {
    console.log('Fetching sales record from API...')
    const response = await axios.get('https://67808bae85151f714b070623.mockapi.io/api/products/salesData') // Update with actual sales data URL
    const salesRecords = response.data
    console.log(`Fetched ${salesRecords.length} sales records`)

    for (const record of salesRecords) {
      console.log(`Processing sales record: ${record.id}`)

      const sanitySalesRecord = {
        _id: `salesRecord_${record.id}`, // Unique ID for each sales record
        _type: 'salesRecord',
        productId: {
          _type: 'reference',
          _ref: `product${record.productId}`, // Assuming you are referring to productId from the existing product data
        },
        userId: record.userId,
        quantity: record.quantity,
        totalAmount: record.totalAmount,
        costPrice: record.costPrice,
        profit: record.profit,
        profitPerSale: record.profitPerSale,
        saleDate: record.saleDate || new Date().toISOString(),
        status: record.status || 'Completed',
      }

      console.log('Uploading sales record to Sanity:', sanitySalesRecord._id)
      const result = await client.create(sanitySalesRecord)
      console.log(`Sales record uploaded successfully: ${result._id}`)
    }

    console.log('Sales record import completed successfully!')
  } catch (error) {
    console.error('Error importing sales data:', error)
  }
}

importData()
