export const sendAjaxEmail = (name, email) => {
	emailjs.send("sendgrid","template_9TNqSx99",
		{ 
			to_name: name, 
			message_html: email, 
			from_name: 'reactBlog', 
			to_email: email 
		}
	).then(response => { 
			console.log(response.status, response.text) 
			if(response.status == 200){
				alert('Message sent successfully!')
				
			}
		}, err => { 
			console.log("FAILED. error=", err) 
		}
	)
}