import { FormDataInterface } from "@/utils/interfaces/interfaces";

export const formChecker = (formData:FormDataInterface) => {
  const fieldsToFill:string[] = []
  for (const key in formData) {
    if(formData[key]===''){
      fieldsToFill.push(key)
    } else {
      console.info('test')
    }
  }
  return fieldsToFill
}