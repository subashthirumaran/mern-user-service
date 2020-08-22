import {
  Companies
} from '../models';

export const createCompany = ({
  name,
  permalink,
  phone,
  address
}) => {
  const currentTime = new Date()
  return {
    name,
    permalink,
    phone,
    address,
    createdAt: currentTime,
    updatedAt: currentTime
  }
}


export const findCompaniesWithName = async (search) => {
  const searchRegex = new RegExp(search, 'i');
  const companies = await Companies.find({
    name: searchRegex
  })
  return companies
}