let queue = [];

document.getElementById('enqueueBtn').addEventListener('click', () => {
    const customerPhone = document.getElementById('customerPhone').value;
    if (customerPhone && queue.length < 9) {
        queue.push(customerPhone);
        document.getElementById('customerPhone').value = ''; // Clear the input
        updateQueueDisplay();
        showQueueStatus();
    } else if (queue.length >= 9) {
        alert('Queue is full. Cannot add more customers.');
    }
});

document.getElementById('dequeueBtn').addEventListener('click', () => {
    if (queue.length > 0) {
        alert('Next customer: ' + queue.shift());
        updateQueueDisplay();
        showQueueStatus();
    } else {
        alert('No more customers in the queue.');
    }
});

document.getElementById('clearAllBtn').addEventListener('click', () => {
    clearQueue();
});

function clearQueue() {
    if (queue.length > 0) {
        queue.length = 0;
        updateQueueDisplay();
        showQueueStatus();
    } else {
        alert('No more customers in the queue.');
    }
}

function updateQueueDisplay() {
    const queueList = document.getElementById('queueList');
    queueList.innerHTML = '<h3>Queue</h3>';
    queue.forEach((customer, index) => {
        queueList.innerHTML += `<p>${index + 1}. ${customer}</p>`;
    });
}

function showQueueStatus() {
    const queueStatus = document.getElementById('queueStatus');
    const currentQueueSize = queue.length;
    const queueStatusMessage = currentQueueSize === 9 ? 'Full!!' : `${currentQueueSize}/9`;
    queueStatus.textContent = `Queue Status: ${queueStatusMessage}`;
}

// ... Your existing code ...

function updateQueueDisplay() {
    const queueList = document.getElementById('queueList');
    queueList.innerHTML = '<h3>Queue</h3>';
    queue.forEach((customer, index) => {
        const customerElement = document.createElement('div');
        customerElement.innerHTML = `<p>${index + 1}. ${customer}</p>`;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'ลบเลย';
        deleteButton.addEventListener('click', () => {
            deleteCustomer(index);
        });

        customerElement.appendChild(deleteButton);
        queueList.appendChild(customerElement);
    });
}

function deleteCustomer(index) {
    queue.splice(index, 1);
    updateQueueDisplay();
    showQueueStatus();
}

