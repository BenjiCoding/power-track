export class GuidUtil {
    static normalize(value: string | null | undefined): string | null {
        if (!value) {
            return null;
        }

        return value.replace(/[{}]/g, "");
    }
}
