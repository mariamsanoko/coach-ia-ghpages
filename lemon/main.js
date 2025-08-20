import './style.css';
import axios from "axios";

const lsqyConfig = {
  API_KEY:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NGQ1OWNlZi1kYmI4LTRlYTUtYjE3OC1kMjU0MGZjZDY5MTkiLCJqdGkiOiI2NjY0ZDQ0YjkzZTIxNDgzZmQwNWY4MjdhMDBhZDAyMmYzMTUwZGQwNThhMTM4MjEzZjQzYmY2MmY2OWE5OGQzOGVhYWY5MjYxMTZiZWJiYiIsImlhdCI6MTc1NTY5ODcwNS4yNTg0OTMsIm5iZiI6MTc1NTY5ODcwNS4yNTg0OTYsImV4cCI6MjA3MTIzMTUwNS4yMTk1NzgsInN1YiI6IjU0MDU2ODkiLCJzY29wZXMiOltdfQ.j3ZHTEhTKmuMWyw3-DsVyLPpF894oDK3yG4gth0MNvNUrOBDsYxZTCohL-MHXtScLvqvgH25UNqTJUgTDvLJqarSxI-2sGFFQUJp5k2XStmuTdrzf4niTkZ697NRJbfuO30ZiX-WcRIIuJJpS3u6JRpI2izVBnwsZBOmi44dHjFlxogMb8WM5ECuVa5-Vvm96e0zx29NrEuEg58cbYv4t2KZh06pd_E8S8s2OkukfCMESVJhkz0MvSqqXU55HF89OW8dHgtQanjT6UDq4Q7MyQO-xb0bS-65StJ2Bysmll0GtFPYYeCwBuEqoy4IjxYvOn-0sqCRoMpc0kHWyYyPSEdONm2DDY7iye3DmtOTOMO7YCJ4AgtJU0Soe_IT_-PagSohOM7U4a59RPun9kF8MWbnVrUtQ4s4pxB-xty__p0EDFJ8l5RpcPXgGlI59ZVOYbCrJCCOAqSJZUB8MRB3J5MGNoV17A76pQ7mqAEEGTwT9pj0CgfoCX751br225bZ",
  URL:"https://api.lemonsqueezy.com/v1",
}

const header = {

  "Accept": "application/vnd.api+json",
  "Content-Type": "application/vnd.api+json",
   Authorization: 'Bearer ${lsqyConfig.API_KEY}'
}

const getProducts = async ()  => {
  try {
    
    const response = await axios.get(
      '${lsqyConfig.URL}/products',
      {
        headers
      }
    );

    console.log(response)
  } catch (error) {
    console.error(error)  
  }  
}
getProducts()
