export function uploadToJing(filename, data) {
    const formData = new FormData();

    formData.append(filename, data, filename);

    return fetch('https://jing.yandex-team.ru/ajax/files', {
        method: 'POST',
        body: formData
    })
}