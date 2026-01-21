"use client";

import { useMemo, useState} from "react";

export default function CompaniesPage() {
  const [companies, setCompanies] = useState([
  {id: 1, name: "Google", size: 150000, industry: "Tech", budget: 1200000 }, 
  {id: 2, name: "Amazon", size: 1300000, industry: "E-commerce", budget: 3000000 },
  {id: 3, name: "Microsoft", size: 180000, industry: "Tech", budget: 1500000 },
  {id: 4, name: "Facebook", size: 60000, industry: "Social Media", budget: 800000 },
  {id: 5, name: "Tesla", size: 70000, industry: "Automotive", budget: 2000000 },
  ]);
  
  const [form, setForm] = useState({name: "", size: "", industry: "", budget: ""});
  
  const largestCompany = useMemo(() => {
    if(companies.length === 0) return null;
    return companies.reduce((max, company) => company.size > max.size ? company : max, companies[0]);
  }, [companies]);
  
  function handleChange(e) {
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value}));
    }
    
   function handleAdd(e) {
     e.preventDefault();
     
     const name = form.name.trim();
     const industry = form.industry.trim();

     const sizeRaw = String(form.size).trim();
     const budgetRaw = String(form.budget).trim();
    
     const sizeNum = Number(sizeRaw.replace(/,/g, ''));
     const budgetNum = Number(budgetRaw.replace(/,/g, ''));
     
     if(!name || !industry || sizeRaw === "" || budgetRaw === "" || Number.isNaN(sizeNum) || Number.isNaN(budgetNum) || sizeNum <= 0 || budgetNum <= 0) {
         alert("Please fill in all fields correctly.");
         return;
     }
     
     const newCompany = {
      id:Date.now(),
      name,
      size: sizeNum,
      industry,
      budget: budgetNum,
   };
   
   setCompanies((prev) => [...prev, newCompany]);
   //ניקוי הטופס לאחר הוספת החברה

   setForm({name: "", size: "", industry: "", budget: ""});
   }
   
   function handleDelete(id) {
     setCompanies((prev) => prev.filter(company => company.id !== id));
   }
   
   return (
   <main style = {{padding: 24}}>
    <h1>Leading Market Companies</h1>
    
    <p>
    <strong>Total Companies:</strong> {companies.length}
    </p>
    
    <hr />
    
    {/*Companies List*/}
    
    <section>
      {companies.length === 0 ? (
        <p>No companies available.</p>
      ) : (
        <ul>
          {companies.map(company => (
            <li key={company.id}
                style={{border: "1px solid #ddd", padding: 12, borderRadius: 8, marginBottom: 12}}>
                <p>
                  <strong>name:</strong> {company.name}
                </p>
                <p>
                  <strong>size:</strong> {company.size}
                </p>
                <p>
                  <strong>industry:</strong> {company.industry}
                </p>
                <p>
                  <strong>budget:</strong> {company.budget}
                </p>

                <button onClick={() => handleDelete(company.id)}>Delete</button>
              
            </li>
          ))}
        </ul>
      )}
    </section>
    
    <hr />
    
    {/*Add form*/}
    <section>
      <form onSubmit={handleAdd} style={{display: "grid", gap: 8, maxWidth: 320}}>
        <input
          type="text"
          name="name"
          placeholder="Company Name"
          value={form.name}
          onChange={handleChange}
        />
        
        <input
          type = "number"
          name="size"
          placeholder="size (number)"
          value={form.size}
          onChange={handleChange}
          inputMode = "numeric"
        />
        <input
         
          name="industry"
          placeholder="Industry"
          value={form.industry}
          onChange={handleChange}
        />
        <input
          type="number"
          name="budget"
          placeholder="Budget (number)"
          value={form.budget}
          onChange={handleChange}
          inputMode="numeric"
        />
       
        <button type="submit">Add Company</button>
      </form>
    </section>
    
    <hr />
    
    {/*Largest Company*/}
    <section>
     {largestCompany ? (
       <p>
         <strong>The Largest Company is:</strong> {largestCompany.name} from the{" "}
         {largestCompany.industry} section.
       </p>
     ) : (
     <p>
     <strong>The largest Company is:</strong> N/A
     </p>)}
    </section>
   </main>
   )
   
   
}
