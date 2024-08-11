import { objectToFormData } from '../serializer';

describe('src/utils/serializer.js', () => {
    let formData = new FormData();

    test('objectToFormData returns formData succesfully', () => {
        const newFormData = objectToFormData('object', { name: 'test' }, formData);

        expect(formData.has('object[name]')).toBeTruthy();
        expect(newFormData.get('object[name]')).toBe('test');
    });
});