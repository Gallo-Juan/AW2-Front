export const handleAlert =(text)=>{
    const alert=document.getElementById('alert')
    const textAlert=document.getElementById('text-alert')

    alert.classList.remove('hidden')
    textAlert.textContent=text
}


export const alert=() =>{
    return `
<div class="bg-rose-500 mt-5 rounded-2xl p-4 hidden" id="alert">
            <div class="flex  items-center">
                <p class="text-sm font-semibold" id="text-alert"></p>
                
            </div>
           </div>
`
}