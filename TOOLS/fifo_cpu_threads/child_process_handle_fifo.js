child_process_handle_fifo = [];
let temp_child_process_handle_fifo
for (let index_array = 1; index_array < (4 + 1); index_array++) {
    child_process_handle_fifo.push(index_array);
}


temp_child_process_handle_fifo = child_process_handle_fifo[0]
child_process_handle_fifo.shift();
child_process_handle_fifo.push(temp_child_process_handle_fifo)


temp_child_process_handle_fifo = child_process_handle_fifo[0]
child_process_handle_fifo.shift();
child_process_handle_fifo.push(temp_child_process_handle_fifo)


temp_child_process_handle_fifo = child_process_handle_fifo[0]
child_process_handle_fifo.shift();
child_process_handle_fifo.push(temp_child_process_handle_fifo)

console.log(child_process_handle_fifo)




