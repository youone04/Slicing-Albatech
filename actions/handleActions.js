
export const handleLogin = async (form) => {
    const data = {
        "email": form.email,
        "password": form.password
    }
    try {

        const result = await fetch(`/api/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        })
        const res = await result.json();
        if (res.token) {
            localStorage.setItem('token', res.token);
            return window.open('/dashboard')
        } else {
            alert(res.error)
        }
    } catch (e) {
        alert("Terjadi Kesalahan")
    }
}