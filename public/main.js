function deleteJob(id){
    fetch(`/jobs/${id}/delete`, { method: "GET" })
        .then(res => {
            if (res.ok) {
                const result = confirm("Are you sure you want to update this job?");
                if (result) {
                    window.location.href = `/jobs/${id}/delete`; // If confirmed, proceed to delete job
                }
            } else {
                window.location.href = "/unauthorized"; // If not authorized, redirect to unauthorized page
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function updateJob(id) {
    fetch(`/jobs/${id}/update`, { method: "GET" }) // Attempt to update job
        .then(res => {
            if (res.ok) {
                const result = confirm("Are you sure you want to update this job?");
                if (result) {
                    window.location.href = `/jobs/${id}/update`; // If confirmed, proceed to update job
                }
            } else {
                window.location.href = "/unauthorized"; // If not authorized, redirect to unauthorized page
            }
        })
        .catch(err => {
            console.error("Error:", err);
        });
}

