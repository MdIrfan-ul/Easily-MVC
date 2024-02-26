function deleteJobs(id) {
    const result = confirm("Are you sure you want to delete this job?");
    if (result) {
        fetch(`/jobs/${id}/delete`, { method: "GET" })
            .then(res => {
                if (res.ok) {
                    alert("Job deleted successfully."); // Alert the user after successful deletion
                    window.location.href = '/'; // Redirect to the home page
                }
            })
            .catch(err => {
                console.error("Error deleting job:", err);
                alert("An error occurred while deleting the job."); // Alert the user if deletion fails
            });
    }
}
